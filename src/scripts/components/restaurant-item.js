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
            <a href="/#/detail/${this._restaurant.id}" class="restaurant-item__detail" title="see detail ${this._restaurant.name}">
              <div class="detail-rating" aria-label="rating ${this._restaurant.rating}">⭐️ ${this._restaurant.rating}</div>
              <h1 class="detail-title">${this._restaurant.name}</h1>
              <span class="detail-city">${this._restaurant.city}</span>
            </a>
        </div>
      `;
  }
}

customElements.define('restaurant-item', RestaurantItem);
