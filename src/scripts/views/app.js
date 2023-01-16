import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
import NotFound from './pages/404';

class app {
  constructor({
    btnOpen, btnClose, drawer, content,
  }) {
    this._btnOpen = btnOpen;
    this._btnClose = btnClose;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      btnOpen: this._btnOpen,
      btnClose: this._btnClose,
      drawer: this._drawer,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];

    try {
      this._content.innerHTML = await page.render();
      await page.afterRender();
    } catch (err) {
      this._content.innerHTML = await NotFound.render();
    }

    const skipLinkElement = document.querySelector('.skip-link');
    skipLinkElement.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#main-content').focus();
    });
  }
}

export default app;
