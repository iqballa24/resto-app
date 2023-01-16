class ReviewsItem extends HTMLElement {
  set review(review) {
    this._review = review;
    this.render();
  }

  render() {
    this.innerHTML = `
        <span class="reviews-item__name" tabIndex="0">${this._review.name}</span>
        <span class="reviews-item__review" tabIndex="0">${this._review.review}</span>
        <time tabIndex="0">${this._review.date}</time>
      `;
  }
}

customElements.define('reviews-item', ReviewsItem);
