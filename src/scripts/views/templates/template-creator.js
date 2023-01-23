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
    <img
    src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}"
    alt="${restaurant.name}"
    />
    <a href="/#/detail/${
  restaurant.id
}" class="restaurant-item__detail" title="see detail ${
  restaurant.name || '-'
}">
      <div class="restaurant-rating" aria-label="rating ${restaurant.rating}">⭐️ ${
  restaurant.rating
}</div>
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
