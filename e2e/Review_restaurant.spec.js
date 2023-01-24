/* eslint-disable no-undef */
Feature('Review Restaurant');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('reviewing a restaurant', async ({ I }) => {
  I.wait(3);

  const containerRestaurants = locate('.restaurants').first();
  const firstRestaurant = locate(
    '.restaurant-item a.restaurant-item__detail',
  ).first();

  I.scrollTo(containerRestaurants);
  I.seeElement('.restaurant-item a.restaurant-item__detail');
  I.click(firstRestaurant);

  I.wait(3);
  I.seeElement('#name');
  I.seeElement('#review');

  const timeStamp = Date.now();
  const nameOfReviewer = `Reviewer ${timeStamp}`;
  const reviewContent = `Review ${timeStamp}`;

  I.fillField('#name', nameOfReviewer);
  I.fillField('#review', reviewContent);
  I.click('button[type="submit"]');

  I.waitForElement('.show', 5);
});
