/* eslint-disable no-undef */
const assert = require('assert');

let firstRestaurantTitle;

Feature('Unliking restaurants');

Before(async ({ I }) => {
  I.amOnPage('/');

  I.waitForElement('.restaurant-item__detail', 10);
  const containerRestaurants = locate('.restaurants').first();
  const firstRestaurant = locate(
    '.restaurant-item a.restaurant-item__detail',
  ).first();
  firstRestaurantTitle = await I.grabTextFrom('.restaurant-title');

  I.scrollTo(containerRestaurants);
  I.seeElement('.restaurant-item a.restaurant-item__detail');
  I.click(firstRestaurant);

  I.wait(3);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
});

Scenario('showing liked restaurants', async ({ I }) => {
  I.seeElement('#query');
  I.seeElement('.restaurant-item');

  const likedRestaurantTitle = await I.grabTextFrom('.restaurant-title');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('Unliking one restaurant', async ({ I }) => {
  I.seeElement('.restaurant-item');

  const firstRestaurant = locate(
    '.restaurant-item a.restaurant-item__detail',
  ).first();

  I.click(firstRestaurant);

  I.wait(3);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.see('-- No restaurant data found --', '.restaurant-item__not__found');
});
