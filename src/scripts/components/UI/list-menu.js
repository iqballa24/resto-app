class ListMenu extends HTMLElement {
  set menus(menus) {
    this._menus = menus;
    this.render();
  }

  render() {
    const { foods, drinks } = this._menus;

    this.innerHTML = `
        <div class="box-menu">
          <h1 tabindex="0">Foods</h1>
          <ul>
              ${foods.map((food) => `<li tabindex="0">${food.name}</li>`).join('')}
          </ul>
        </div>
        <div class="box-menu">
          <h1 tabindex="0">Drinks</h1>
          <ul>
            ${drinks.map((drink) => `<li tabindex="0">${drink.name}</li>`).join('')}
          </ul>
        </div>
      `;
  }
}

customElements.define('list-menu', ListMenu);
