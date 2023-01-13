import CONFIG from '../global/config';

class RestaurantItem extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="restaurant-item">
            <img
            src="${CONFIG.BASE_IMAGE_URL}${this._restaurant.pictureId}"
            alt="picture ${this._restaurant.name}"
            />
            <div class="restaurant-item__detail">
            <div class="detail-rating" tabindex="0" aria-label="rating ${this._restaurant.rating}">⭐️ ${this._restaurant.rating}</div>
            <h1 class="detail-title" tabindex="0">
              <a href="/#/detail/${this._restaurant.id}">${this._restaurant.name}</a>
            </h1>
            <span class="detail-city" tabindex="0">${this._restaurant.city}</span>
            </div>
        </div>
      `;
  }
}

customElements.define('restaurant-item', RestaurantItem);
