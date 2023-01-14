import CONFIG from '../../global/config';

import '../UI/title-text';
import '../UI/list-menu';
import '../reviews-list';
import '../reviews-form';

class DetailSection extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    const {
      name,
      categories,
      address,
      city,
      pictureId,
      description,
      menus,
      customerReviews,
    } = this._restaurant;

    this.innerHTML = `
          <div class="detail-section__info">
                <div class="img">
                    <img src="${
  CONFIG.BASE_IMAGE_URL
}${pictureId}" alt="${name} image" />
                </div>
                <div class="text">
                <div class="categories">
        ${categories
    .map((category) => `<label>${category.name}</label>`)
    .join('')}
            </div>
            <h1 tabindex="0">${name}</h1>
            <span tabindex="0">📍${address}, ${city}</span>
            <span tabindex="0">${description}</span>
          </div>
          </div>
          <div class="detail-section__menus">
            <title-text title="All available menus" text="Menu"></title-text>
            <list-menu></list-menu>
          </div>
          <div class="detail-section__reviews">
            <title-text title="All Reviews from customers" text="Review customer"></title-text>
            <div class="reviews-customers">
              <reviews-list></reviews-list>
              <reviews-form></reviews-form>
          </div>
    `;

    const menuListElement = document.querySelector('list-menu');
    menuListElement.menus = menus;

    const reviewsListElement = document.querySelector('reviews-list');
    reviewsListElement.reviews = customerReviews;
  }
}

customElements.define('detail-section', DetailSection);
