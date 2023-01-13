class HeroSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <section class="hero-section">
            <div class="hero-section__title">
              <h1 class="logo" tabindex="0">
                  Find the best restaurant with Ngemil<span>Kuy.</span>
              </h1>
              <a href="#restaurant-section" class="button button-primary"
                  >Get Started</a
              >
            </div>
            <img src="./images/wave.svg" class="hero-section__wave" alt="" />
        </section>
    `;
  }
}

customElements.define('hero-section', HeroSection);
