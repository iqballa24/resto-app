class ReviewsForm extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <h3>Add review</h3>
        <form id="reviews-form">
            <input id="name" name="name" type="text" placeholder="Your name" required/>
            <textarea id="review" name="review" rows="4" placeholder="Your review" required></textarea>
            <button id="btn-submit" type="submit" class="button button-primary">Send</button>
        </form>
      `;
  }
}

customElements.define('reviews-form', ReviewsForm);
