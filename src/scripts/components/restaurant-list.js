import '../data/benefit';
import './restaurant-item';
import './UI/error-state';

class RestaurantList extends HTMLElement {
  set restaurants(restaurants) {
    this._restaurants = restaurants;
    if (restaurants.error) {
      this.error();
    } else {
      this.render();
    }
  }

  render() {
    const { restaurants } = this._restaurants;

    this.innerHTML = '';

    if (restaurants.length === 0) {
      this.innerHTML = '<p>-- No restaurant data found --</p>';
    }

    restaurants.forEach((restaurant) => {
      const restaurantItemElement = document.createElement('restaurant-item');
      restaurantItemElement.restaurant = restaurant;
      this.appendChild(restaurantItemElement);
    });
  }

  error() {
    const { message } = this._restaurants;

    this.innerHTML = `<error-state text="${message}"></error-state>`;
  }
}

customElements.define('restaurant-list', RestaurantList);
