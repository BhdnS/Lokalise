export default class Burger {
  constructor() {
    this.mask = document.querySelector('#mask');
    this.burger = document.querySelector('#burger');
    this.box = document.querySelector('#box');
    this.body = document.querySelector('body');
    this.burgerImg = document.querySelectorAll('.burger_img');
    this.nav = document.querySelector('#nav');

    this.flag = false;
  }

  clickBurger() {
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('burger_menu')) {
        if (!this.flag) {
          this.#openBurger();
        } else {
          this.#closeBurger();
        }
      } else if (this.flag) {
        this.#closeBurger();
      }
    });
  }

  #closeBurger() {
    this.flag = false;
    this.burger.classList.remove('rotate');
    this.mask.classList.add('none');
    this.burgerImg.forEach((el) => {
      el.classList.remove('white_burger');
    });
    this.body.classList.remove('hidden');
    this.box.classList.remove('right_0');
    this.nav.classList.remove('right_50');
  }

  #openBurger() {
    this.flag = true;
    this.burger.classList.add('rotate');
    this.mask.classList.remove('none');
    this.burgerImg.forEach((el) => {
      el.classList.add('white_burger');
    });
    this.body.classList.add('hidden');
    this.box.classList.add('right_0');
    this.nav.classList.add('right_50');
  }
}
