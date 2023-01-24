/* eslint-disable array-callback-return */
import '../../components/home';
import '../../components/benefit-list';
import '../../components/restaurant-list';
import '../../components/UI/title-text';

import RestaurantsSource from '../../data/restaurants-source';
import benefits from '../../data/benefit';
import LoaderInitiator from '../../utils/loader-initiator';
import { createRestaurantItemTemplate } from '../templates/template-creator';

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
          <div id="restaurants" class="restaurants"></div>
        </section>
      `;
  },

  async afterRender() {
    const Loader = new LoaderInitiator({
      loaderContainer: document.querySelector('loader-bar'),
    });

    const containerRestaurants = document.querySelector('#restaurants');
    const benefitsContainer = document.querySelector('benefit-list');
    benefitsContainer.benefits = benefits;

    try {
      Loader.show();
      const res = await RestaurantsSource.listRestaurants();

      if (res.error) {
        throw res;
      }

      res.restaurants.map((restaurant) => {
        containerRestaurants.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    } catch (err) {
      containerRestaurants.innerHTML = '<p>-- No restaurant data found --</p>';
      console.log(err);
    } finally {
      Loader.hide();
    }
  },
};

export default Home;
