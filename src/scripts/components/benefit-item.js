class BenefitItem extends HTMLElement {
  set benefit(benefit) {
    this._benefit = benefit;
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="benefit-box">
            <img src="./images/icons/${this._benefit.img}" alt="" width="100%" height="100%"/>
            <div class="benefit-box__text">
              <h1 tabindex="0">${this._benefit.title}</h1>
              <p tabindex="0">${this._benefit.text}</p>
            </div>
        </div>
    `;
  }
}

customElements.define('benefit-item', BenefitItem);
