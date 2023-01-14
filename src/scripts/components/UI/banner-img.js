class BannerImg extends HTMLElement {
  set banner(banner) {
    this._banner = banner;
    this.render();
  }

  render() {
    this.innerHTML = `
        <section class="banner-img">
          <div class="banner-img__title">
            <h2 id="banner-title" tabindex="0">${this._banner}</h2>
          </div>
        </section>
      `;
  }
}

customElements.define('banner-img', BannerImg);
