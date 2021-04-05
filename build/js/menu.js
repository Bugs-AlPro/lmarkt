'use strict'

// переменные и функция открытия меню по клику на ссылку

let buttonMenu = document.querySelector('.catalog-link');
let buttonMenuText = document.querySelector('.sm-top__text-menu');
let svgGeneralMenu = document.querySelector('.icon-catolog');
let svgOpenMenu = document.querySelector('.icon-menu-open');
let body = document.querySelector('.body');
let menuWindow = document.querySelector('.header__catalog');

let groundMenuItems = document.querySelectorAll('.catalog__group');
let categoryMenuItems = document.querySelectorAll('.catalog__category');
let subcategoryMenuItems = document.querySelectorAll('.catalog__subcategory');

buttonMenu.onclick = function () {
  svgGeneralMenu.classList.toggle('svg-none');
  svgOpenMenu.classList.toggle('svg-none');
  buttonMenu.classList.toggle('cklick-open');
  buttonMenuText.classList.toggle('cklick-open');
  body.classList.toggle('background');
  menuWindow.classList.toggle('big-none');
  for (let item of groundMenuItems) {
    item.classList.remove('catalog__group--active');
  };
};

// перемещение по разным подкатегориям в меню

for (let item of groundMenuItems) {
  item.onclick = function () {
    for (let oldItem of groundMenuItems) {
      oldItem.classList.remove('catalog__group--active');
    }
    if (item.classList.contains('catalog__group--active')) {
      item.classList.remove('catalog__group--active');
    } else {
      item.classList.add('catalog__group--active');
    };
  };
}

for (let category of categoryMenuItems) {
  category.onclick = function () {
    for (let oldItem of categoryMenuItems) {
      oldItem.classList.remove('catalog__category--active');
    }
    if (category.classList.contains('catalog__category--active')) {
      category.classList.remove('catalog__category--active');
    } else {
      category.classList.add('catalog__category--active');
    }
  }
}
