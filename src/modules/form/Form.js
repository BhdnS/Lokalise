export default class Form {
  constructor() {
    this.btn = document.querySelectorAll('button');
  }

  form() {
    this.btn.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
      });
    });
  }
}
