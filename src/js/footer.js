let footerButtons = document.querySelectorAll('.footer__button');
let list = document.querySelector('.footer__items');

for (let footerButton of footerButtons) {
  footerButton.onclick = function () {
    footerButton.classList.toggle('footer__button-open');
    list.classList.toggle('none');
  }
};


