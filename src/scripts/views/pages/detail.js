import '../../components/UI/banner-img';
import '../../components/detail/detail-section';

import UrlParser from '../../routes/url-parser';
import RestaurantsSource from '../../data/restaurants-source';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
      <banner-img></banner-img>
      <detail-section></detail-section>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantsSource.detailRestaurant(url.id);

    const bannerElement = document.querySelector('banner-img');
    bannerElement.banner = `Detail / ${restaurant.restaurant.name ?? ''}`;

    const detailElement = document.querySelector('detail-section');
    detailElement.restaurant = restaurant.restaurant;

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.restaurant.id,
        name: restaurant.restaurant.name,
        rating: restaurant.restaurant.rating,
        pictureId: restaurant.restaurant.pictureId,
        city: restaurant.restaurant.city,
      },
    });

    const reviewsForm = document.querySelector('#reviews-form');
    reviewsForm.addEventListener('submit', (e) => {
      e.preventDefault();
      console.log(e.target.review.value);
    });
  },
};

export default Detail;
