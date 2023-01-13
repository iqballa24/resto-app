class BenefitItem extends HTMLElement {
  set benefit(benefit) {
    this._benefit = benefit;
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="benefit-box">
            <img src="./icon-eat.svg" alt="${this._benefit.title} icon" />
            <div class="benefit-box__text">
              <h1 tabindex="0">${this._benefit.title}</h1>
              <p tabindex="0">${this._benefit.text}</p>
            </div>
        </div>
    `;
  }
}

customElements.define('benefit-item', BenefitItem);
