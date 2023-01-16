class ErrorState extends HTMLElement {
  connectedCallback() {
    const { text } = this.attributes;
    this._text = text.value;

    this.render();
  }

  render() {
    this.innerHTML = `
        <img src="/images/error.svg" alt="" loading="lazy"/>    
        <h3 tabIndex="0">Something went wrong</h3>
        <p tabIndex="0">${this._text}</p>
    `;
  }
}

customElements.define('error-state', ErrorState);
