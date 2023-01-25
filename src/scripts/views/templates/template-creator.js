import CONFIG from '../../global/config';

const createLikeRestaurantButtonTemplate = () => `
<button aria-label="like this restaurant" id="likeButton" class="like">
   <i class="fa fa-heart-o" aria-hidden="true"></i>
</button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
<button aria-label="unlike this restaurant" id="likeButton" class="like">
  <i class="fa fa-heart" aria-hidden="true"></i>
</button>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <picture>
      <source media="(max-width: 650px)" data-srcset="${CONFIG.BASE_IMAGE_URL}small/${restaurant.pictureId}">
      <source media="(max-width: 976px)" data-srcset="${CONFIG.BASE_IMAGE_URL}medium/${restaurant.pictureId}">
      <img
        data-src="${CONFIG.BASE_IMAGE_URL}large/${restaurant.pictureId}"
        alt="${restaurant.name} poster"
        class="lazyload"
        width="100%"
      />
    </picture>
    <a href="/#/detail/${restaurant.id}" class="restaurant-item__detail" title="see detail ${restaurant.name || '-'}">
      <div class="restaurant-rating" aria-label="rating ${restaurant.rating}">⭐️ ${restaurant.rating}</div>
      <h1 class="restaurant-title">${restaurant.name || '-'}</h1>
      <span class="restaurant-city">${restaurant.city}</span>
    </a>
  </div>
`;

export {
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
  createRestaurantItemTemplate,
};
