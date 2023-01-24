/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#query');
  I.see('-- No restaurant data found --', '.restaurant-item__not__found');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('-- No restaurant data found --', '.restaurant-item__not__found');

  I.amOnPage('/');

  I.waitForElement('.restaurant-item__detail', 10);

  const containerRestaurants = locate('.restaurants').first();
  const firstRestaurant = locate(
    '.restaurant-item a.restaurant-item__detail',
  ).first();
  const firstRestaurantTitle = await I.grabTextFrom('.restaurant-title');

  I.scrollTo(containerRestaurants);
  I.seeElement('.restaurant-item a.restaurant-item__detail');
  I.click(firstRestaurant);

  I.wait(3);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.waitForElement('.restaurant-item', 10);
  I.seeElement('.restaurant-item');

  const likedRestaurantTitle = await I.grabTextFrom('.restaurant-title');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('searching restaurants', async ({ I }) => {
  I.see('-- No restaurant data found --', '.restaurant-item__not__found');

  I.amOnPage('/');

  I.waitForElement('.restaurant-item__detail', 10);

  I.seeElement('.restaurant-item a.restaurant-item__detail');

  const names = [];

  for (let i = 1; i <= 3; i++) {
    I.click(locate('.restaurant-item a.restaurant-item__detail').at(i));
    I.wait(3);
    I.seeElement('#likeButton');
    I.click('#likeButton');
    names.push(await I.grabTextFrom('.restaurant-title'));
    I.amOnPage('/');
  }

  I.amOnPage('/#/favorite');
  I.seeElement('#query');

  const searchQuery = names[1].substring(1, 3);
  const matchingRestaurant = names.filter(
    (name) => name.indexOf(searchQuery) !== -1,
  );

  I.fillField('#query', searchQuery);
  I.pressKey('Enter');

  const visibleLikedRestaurants = await I.grabNumberOfVisibleElements(
    '.restaurant-item',
  );

  assert.strictEqual(matchingRestaurant.length, visibleLikedRestaurants);

  matchingRestaurant.forEach(async (name, index) => {
    const visibleName = await I.grabTextFrom(
      locate('.restaurant-title').at(index + 1),
    );
    assert.strictEqual(name, visibleName);
  });
});
