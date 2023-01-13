class TitleText extends HTMLElement {
  connectedCallback() {
    const { title, text } = this.attributes;
    this._title = title.value;
    this._text = text.value;

    this.render();
  }

  render() {
    this.innerHTML = `
      <span tabindex="0">${this._text}</span>
      <h2 tabindex="0">${this._title}</h2>
    `;
  }
}

customElements.define('title-text', TitleText);
