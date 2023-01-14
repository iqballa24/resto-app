class ReviewsItem extends HTMLElement {
  set review(review) {
    this._review = review;
    this.render();
  }

  render() {
    this.innerHTML = `
        <span class="reviews-item__name">${this._review.name}</span>
        <span class="reviews-item__review">${this._review.review}</span>
        <time>${this._review.date}</time>
      `;
  }
}

customElements.define('reviews-item', ReviewsItem);
