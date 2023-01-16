import RestaurantsSource from '../data/restaurants-source';

const FormInitiator = {
  async init({ id, formContainer, button }) {
    this._id = id;
    this._formContainer = formContainer;
    this._button = button;
    this._toast = document.querySelector('toast-bar');

    this._renderForm();
  },

  async _renderForm() {
    this._formContainer.addEventListener('submit', async (e) => {
      e.preventDefault();
      const data = {
        id: this._id,
        name: e.target.name.value,
        review: e.target.review.value,
      };

      this._button.innerHTML = 'Loading...';

      try {
        const res = await RestaurantsSource.addNewReview(data);

        if (res.error) {
          throw Error('Something went wrong');
        }

        return this._isSuccess();
      } catch (err) {
        return this._isError(err);
      } finally {
        this._button.innerHTML = 'Send';
        this._formContainer.reset();
      }
    });
  },

  async _isSuccess() {
    this._toast.text = 'Success, review has been submitted';
    this._toast.className = 'show';
    setTimeout(() => {
      this._toast.classList.remove('show');
    }, 3000);
  },

  async _isError(err) {
    this._toast.text = 'Something went wrong';
    this._toast.className = 'show';
    setTimeout(() => {
      this._toast.classList.remove('show');
    }, 3000);
    console.log(err);
  },
};

export default FormInitiator;
