'use strict'
let buttonMenu = document.querySelector('.catalog-link');
let svgGeneralMenu = document.querySelector('.icon-catolog');
let svgOpenMenu = document.querySelector('.icon-menu-open');
let body = document.querySelector('.body');
let menuWindow = document.querySelector('.header__catalog');

buttonMenu.onclick = function () {
  svgGeneralMenu.classList.toggle('svg-none');
  svgOpenMenu.classList.toggle('svg-none');
  buttonMenu.classList.toggle('cklick-open');
  body.classList.toggle('background');
  menuWindow.classList.toggle('big-none');
};



