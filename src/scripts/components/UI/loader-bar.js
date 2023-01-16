class LoaderBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <img src="./images/logo.svg" alt=""/>
        <h1 class="logo">Ngemil<span>Kuy.</span></h1>
      `;
  }
}

customElements.define('loader-bar', LoaderBar);
