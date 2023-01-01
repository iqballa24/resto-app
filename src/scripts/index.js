import 'regenerator-runtime'; /* for async await transpile */
import '../styles/sass/main.scss';
import data from '../DATA.json';

const btnToggle = document.getElementById('btn-toggle');
const btnCancel = document.getElementById('btn-cancel');
const navMenu = document.getElementById('nav-menu');

btnToggle.onclick = (e) => {
  navMenu.classList.toggle('show');
  document.body.classList.toggle('disabledScroll');
  e.stopPropagation();
};
btnCancel.onclick = () => {
  navMenu.classList.remove('show');
  document.body.classList.remove('disabledScroll');
};

let restaurantsHTML = '';

data.restaurants.map((restaurant) => {
  restaurantsHTML += `
    <li class="restaurant-item">
      <img
        src="${restaurant.pictureId}"
        alt="picture ${restaurant.name}"
      />
      <div class="restaurant-item__detail">
        <div class="detail-rating" tabindex="0" aria-label="rating ${restaurant.rating}">⭐️ ${restaurant.rating}</div>
        <h1 class="detail-title" tabindex="0">${restaurant.name}</h1>
        <span class="detail-city" tabindex="0">${restaurant.city}</span>
      </div>
    </li>
  `;
});

document.querySelector('#restaurants-list').innerHTML = restaurantsHTML;  
