class LoaderInitiator {
  constructor({ loaderContainer }) {
    this._loaderContainer = loaderContainer;
  }

  show() {
    this._loaderContainer.className = 'show';
    this._loaderContainer.classList.remove('hide');
    document.body.className = 'disabledScroll';
  }

  hide() {
    setTimeout(() => {
      this._loaderContainer.classList.remove('show');
      document.body.classList.remove('disabledScroll');
    }, 800);
  }
}

export default LoaderInitiator;
