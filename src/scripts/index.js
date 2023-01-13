/* eslint-disable array-callback-return */
import 'regenerator-runtime'; /* for async await transpile */
import '../styles/sass/main.scss';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  btnOpen: document.querySelector('#btn-toggle'),
  btnClose: document.querySelector('#btn-cancel'),
  drawer: document.querySelector('#nav-menu'),
  content: document.querySelector('#main-content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  // swRegister();
});
