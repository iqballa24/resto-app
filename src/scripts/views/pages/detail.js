import '../../components/UI/banner-img';
import '../../components/detail/detail-section';

import UrlParser from '../../routes/url-parser';
import RestaurantsSource from '../../data/restaurants-source';

const Detail = {
  async render() {
    return `
      <banner-img></banner-img>
      <detail-section></detail-section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantsSource.detailRestaurant(url.id);

    const bannerElement = document.querySelector('banner-img');
    bannerElement.banner = restaurant.restaurant.name ?? '';

    const detailElement = document.querySelector('detail-section');
    detailElement.restaurant = restaurant.restaurant;
  },
};

export default Detail;
