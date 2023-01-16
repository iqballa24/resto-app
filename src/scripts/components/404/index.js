class NotFound extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <img src="/images/404.svg" alt="page not found" tabIndex="0"/>
        <a href="#/" class="button button-secondary">Back</a>
    `;
  }
}

customElements.define('not-found', NotFound);
