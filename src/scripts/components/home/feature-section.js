class FeatureSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <section class="feature-section">
            <div class="feature-section__text">
                <h1 class="logo" tabindex="0">About Ngemil<span>Kuy.</span></h1>
                <p tabindex="0">
                    NgemilKuy is a website providing information about all restaurants
                    in Indonesia. With a recommendation system, it can make it easier
                    for you to choose the closest and most suitable restaurant. So you
                    don't have to spend a lot of time just to find the restaurant.
                </p>
            </div>
            <div class="feature-section__img">
                <picture>
                  <source media="(max-width: 385px)" type="image/jpeg" data-srcset="./images/heros/img-about-small.jpg">
                  <source media="(max-width: 650px)" type="image/jpeg" data-srcset="./images/heros/img-about-medium.jpg">
                  <source type="image/jpeg" data-srcset="./images/heros/img-about-large.jpg">
                  <img data-src="./images/heros/img-about.jpg" alt="about ngemilkuy" width="100%" class="lazyload"/>
                </picture>
            </div>
        </section>
      `;
  }
}

customElements.define('feature-section', FeatureSection);
