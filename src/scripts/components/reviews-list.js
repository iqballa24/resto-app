import './reviews-item';

class ReviewsList extends HTMLElement {
  set reviews(reviews) {
    this._reviews = reviews;
    this.render();
  }

  render() {
    this.innerHTML = '';
    this._reviews.forEach((review) => {
      const reviewItemElement = document.createElement('reviews-item');
      reviewItemElement.review = review;
      this.appendChild(reviewItemElement);
    });
  }
}

customElements.define('reviews-list', ReviewsList);
