class ToastBar extends HTMLElement {
  set text(text) {
    this._text = text;
    this.render();
  }

  render() {
    this.innerHTML = `${this._text}`;
  }
}

customElements.define('toast-bar', ToastBar);
