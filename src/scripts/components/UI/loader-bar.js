class LoaderBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <img src="./images/logo.svg" alt="" width="60px" height="60px"/>
        <h1 class="logo">Ngemil<span>Kuy.</span></h1>
      `;
  }
}

customElements.define('loader-bar', LoaderBar);
