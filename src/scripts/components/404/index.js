class NotFound extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <picture>
          <source media="(max-width: 385px)" type="image/jpeg" data-srcset="./images/404-small.jpg">
          <source media="(max-width: 650px)" type="image/jpeg" data-srcset="./images/404-medium.jpg">
          <source type="image/jpeg" data-srcset="./images/404-large.jpg">
          <img src="/images/404.svg" alt="page not found" tabIndex="0"/>
        </picture>
        <a href="#/" class="button button-secondary">Back</a>
    `;
  }
}

customElements.define('not-found', NotFound);
