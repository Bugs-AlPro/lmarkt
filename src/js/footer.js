let footerButtons = document.querySelectorAll('.footer__button');
let lists = document.querySelectorAll('.footer__items');

for (let list of lists) {
  for (let footerButton of footerButtons) {
    footerButton.onclick = function () {
      footerButton.classList.toggle('footer__button-open');
    }
  };
  if (footerButton.classList.contains('footer__button-open')) {
    list.classList.remove('none');
  } else {
    list.classList.add('none');
  };
};

