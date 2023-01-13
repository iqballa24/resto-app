import '../data/benefit';
import './benefit-item';

class BenefitList extends HTMLElement {
  set benefits(benefits) {
    this._benefits = benefits;
    this.render();
  }

  render() {
    this.innerHTML = '';
    this._benefits.forEach((benefit) => {
      const benefitItemElement = document.createElement('benefit-item');
      benefitItemElement.benefit = benefit;
      this.appendChild(benefitItemElement);
    });
  }
}

customElements.define('benefit-list', BenefitList);
