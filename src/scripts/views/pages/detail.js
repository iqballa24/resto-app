import '../../components/UI/banner-img';
import '../../components/detail/detail-section';

import UrlParser from '../../routes/url-parser';
import RestaurantsSource from '../../data/restaurants-source';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FormInitiator from '../../utils/form-initiator';
import LoaderInitiator from '../../utils/loader-initiator';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Detail = {
  async render() {
    return `
      <banner-img></banner-img>
      <detail-section></detail-section>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    scroll(0, 0);
    const Loader = new LoaderInitiator({
      loaderContainer: document.querySelector('loader-bar'),
    });

    const url = UrlParser.parseActiveUrlWithoutCombiner();
    let restaurant = null;

    try {
      Loader.show();
      const res = await RestaurantsSource.detailRestaurant(url.id);

      if (res.error) {
        throw res;
      }

      restaurant = res;
    } catch (err) {
      restaurant = err;
    } finally {
      Loader.hide();
    }

    const bannerElement = document.querySelector('banner-img');
    bannerElement.banner = `Detail / ${restaurant.restaurant?.name ?? ''}`;

    const detailElement = document.querySelector('detail-section');
    detailElement.restaurant = restaurant;

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurant: FavoriteRestaurantIdb,
      restaurant: {
        id: restaurant.restaurant.id,
        name: restaurant.restaurant.name,
        rating: restaurant.restaurant.rating,
        pictureId: restaurant.restaurant.pictureId,
        city: restaurant.restaurant.city,
      },
    });

    FormInitiator.init({
      id: restaurant.restaurant.id,
      formContainer: document.querySelector('#reviews-form'),
      button: document.querySelector('#btn-submit'),
    });
  },
};

export default Detail;
