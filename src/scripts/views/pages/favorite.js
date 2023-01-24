/* eslint-disable no-new */
/* eslint-disable array-callback-return */
import '../../components/UI/error-state';

import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import FavoriteRestaurantSearchView from './liked-restaurants/favorite-restaurant-search-view';
import FavoriteRestaurantShowPresenter from './liked-restaurants/favorite-restaurant-show-presenter';
import FavoriteRestaurantSearchPresenter from './liked-restaurants/favorite-restaurant-search-presenter';

const view = new FavoriteRestaurantSearchView();

const Favorite = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    const bannerElement = document.querySelector('banner-img');
    bannerElement.banner = 'Favorite';

    new FavoriteRestaurantShowPresenter({
      view,
      favoriteRestaurants: FavoriteRestaurantIdb,
    });
    new FavoriteRestaurantSearchPresenter({
      view,
      favoriteRestaurants: FavoriteRestaurantIdb,
    });
  },
};

export default Favorite;
