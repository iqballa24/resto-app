import { createRestaurantItemTemplate } from '../../templates/template-creator';

/* eslint-disable class-methods-use-this */
class FavoriteRestaurantSearchView {
  getTemplate() {
    return `
        <div id="search-container">
            <input id="query" type="text">
            <h2 class="content__heading">Your liked restaurant</h2>
            <div class="result-container">
              <div id="restaurants" class="restaurants"></div>
            </div>
        </div>
      `;
  }

  runWhenUsersIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  showFavoriteRestaurants(restaurants = []) {
    let html;
    if (restaurants.length) {
      html = restaurants.reduce(
        (carry, restaurant) => carry.concat(createRestaurantItemTemplate(restaurant)),
        '',
      );
    } else {
      html = this._getEmptyMovieTemplate();
    }

    document.getElementById('restaurants').innerHTML = html;

    document
      .getElementById('restaurants')
      .dispatchEvent(new Event('restaurants:updated'));
  }

  _getEmptyMovieTemplate() {
    return '<div class="restaurant-item__not__found">Restaurant not found</div>';
  }
}

export default FavoriteRestaurantSearchView;
