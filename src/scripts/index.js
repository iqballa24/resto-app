/* eslint-disable array-callback-return */
import 'regenerator-runtime'; /* for async await transpile */
import '../styles/sass/main.scss';
import './components/UI/toast-bar';
import './components/UI/loader-bar';
import App from './views/app';
import swRegister from './utils/sw-register';

import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const app = new App({
  btnOpen: document.querySelector('#btn-toggle'),
  btnClose: document.querySelector('#btn-cancel'),
  drawer: document.querySelector('#nav-menu'),
  content: document.querySelector('#main-content'),
});

window.addEventListener('hashchange', () => {
  document.querySelector('#nav-menu').classList.remove('show');
  document.body.classList.remove('disabledScroll');
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
