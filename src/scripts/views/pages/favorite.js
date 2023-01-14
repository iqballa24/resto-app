import '../../components/UI/banner-img';
import '../../components/restaurant-list';

import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Favorite = {
  async render() {
    return `
      <banner-img></banner-img>
      <section class="favorite-section">
        <restaurant-list></restaurant-list>
      </section>
    `;
  },

  async afterRender() {
    const bannerElement = document.querySelector('banner-img');
    bannerElement.banner = 'Favorite';

    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('restaurant-list');
    restaurantsContainer.restaurants = restaurants;
  },
};

export default Favorite;
