import Burger from './Burger';

const burgerData = new Burger({
  mask: document.querySelector('#mask'),
  burger: document.querySelector('#burger'),
  box: document.querySelector('#box'),
  body: document.querySelector('body'),
  burgerImg: document.querySelectorAll('.burger_img'),
  nav: document.querySelector('#nav'),
});

burgerData.clickBurger();
