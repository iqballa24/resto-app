const DrawerInitiator = {
  init({
    btnOpen, btnClose, drawer,
  }) {
    btnOpen.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });

    btnClose.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('show');
    document.body.classList.toggle('disabledScroll');
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('show');
    document.body.classList.toggle('disabledScroll');
  },
};

export default DrawerInitiator;
