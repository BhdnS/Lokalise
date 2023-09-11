export default class Form {
  constructor(btn) {
    this.btn = btn;
  }

  form() {
    this.btn.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
      });
    });
  }
}
