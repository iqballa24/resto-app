/* eslint-disable class-methods-use-this */
import { createRestaurantItemTemplate } from '../../templates/template-creator';
import '../../../components/UI/banner-img';

class FavoriteRestaurantSearchView {
  getTemplate() {
    return `
        <banner-img></banner-img>
        <section class="favorite-section">
          <input id="query" type="text" class="search-bar" placeholder="Search favorite restaurants">
          <div id="restaurants" class="restaurants"></div>
        </section>
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
      html = this._getEmptyRestaurantsTemplate();
    }

    document.getElementById('restaurants').innerHTML = html;

    document
      .getElementById('restaurants')
      .dispatchEvent(new Event('restaurants:updated'));
  }

  _getEmptyRestaurantsTemplate() {
    return '<div class="restaurant-item__not__found">-- No restaurant data found --</div>';
  }
}

export default FavoriteRestaurantSearchView;
