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

    let data = null;

    try {
      const res = await FavoriteRestaurantIdb.getAllRestaurants();

      if (res.error) {
        throw res;
      }

      data = { error: false, restaurants: res };
    } catch (err) {
      data = { error: true, message: 'Failed to fetch data' };
    }

    const restaurantsContainer = document.querySelector('restaurant-list');
    restaurantsContainer.restaurants = data;
  },
};

export default Favorite;
