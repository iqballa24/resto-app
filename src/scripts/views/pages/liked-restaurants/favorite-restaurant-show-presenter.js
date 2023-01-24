/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
class FavoriteRestaurantShowPresenter {
  constructor({ view, favoriteRestaurants }) {
    this._view = view;
    this._favoriteRestaurants = favoriteRestaurants;

    this._showFavoriteRestaurants();
  }

  async _showFavoriteRestaurants() {
    try {
      const restaurants = await this._favoriteRestaurants.getAllRestaurants();
      this._displayRestaurants(restaurants);
    } catch (err) {
      this._displayRestaurants([]);
      console.log(err);
    }
  }

  _displayRestaurants(restaurants) {
    this._view.showFavoriteRestaurants(restaurants);
  }
}

export default FavoriteRestaurantShowPresenter;
