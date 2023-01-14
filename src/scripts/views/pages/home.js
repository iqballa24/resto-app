import '../../components/home';
import '../../components/benefit-list';
import '../../components/restaurant-list';
import '../../components/UI/title-text';

import RestaurantsSource from '../../data/restaurants-source';
import benefits from '../../data/benefit';

const Home = {
  async render() {
    return `
        <hero-section></hero-section>
        <feature-section></feature-section>
        <section class="benefit-section">
          <title-text title="Why Should Choose Us?" text="Special benefit for you"></title-text>
          <benefit-list></benefit-list>
        </section>
        <section id="restaurant-section" class="restaurants-section">
          <title-text title="Restaurants Near your" text="Restaurants Based By City"></title-text>
          <restaurant-list></restaurant-list>
        </section>
      `;
  },

  async afterRender() {
    const benefitsContainer = document.querySelector('benefit-list');
    benefitsContainer.benefits = benefits;

    const data = await RestaurantsSource.listRestaurants();
    const restaurantsContainer = document.querySelector('restaurant-list');
    restaurantsContainer.restaurants = data.restaurants;
  },
};

export default Home;
