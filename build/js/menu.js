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
  for (let category of categoryMenuItems) {
    category.classList.remove('catalog__category--active');
    category.classList.remove('menu-open');
  };
  for (let subcategory of subcategoryMenuItems) {
    subcategory.classList.remove('menu-open');
  }
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

      let currentItem = item;

      if (currentItem.classList.contains('harmonica')) {
        for (let category of categoryMenuItems) {
          if (category.classList.contains('harmonica')) {
            category.classList.add('menu-open')
          } else {
            category.classList.remove('menu-open')
          }
        }
      }

      if (currentItem.classList.contains('comutation')) {
        for (let category of categoryMenuItems) {
          if (category.classList.contains('comutation')) {
            category.classList.add('menu-open')
          } else {
            category.classList.remove('menu-open')
          }
        }
      }

      if (currentItem.classList.contains('sound')) {
        for (let category of categoryMenuItems) {
          if (category.classList.contains('sound')) {
            category.classList.add('menu-open')
          } else {
            category.classList.remove('menu-open')
          }
        }
      }

      if (currentItem.classList.contains('studio')) {
        for (let category of categoryMenuItems) {
          if (category.classList.contains('studio')) {
            category.classList.add('menu-open')
          } else {
            category.classList.remove('menu-open')
          }
        }
      }

      if (currentItem.classList.contains('microphone')) {
        for (let category of categoryMenuItems) {
          if (category.classList.contains('microphone')) {
            category.classList.add('menu-open')
          } else {
            category.classList.remove('menu-open')
          }
        }
      }

      if (currentItem.classList.contains('drums')) {
        for (let category of categoryMenuItems) {
          if (category.classList.contains('drums')) {
            category.classList.add('menu-open')
          } else {
            category.classList.remove('menu-open')
          }
        }
      }

      if (currentItem.classList.contains('keyboards')) {
        for (let category of categoryMenuItems) {
          if (category.classList.contains('keyboards')) {
            category.classList.add('menu-open')
          } else {
            category.classList.remove('menu-open')
          }
        }
      }

      if (currentItem.classList.contains('guitar')) {
        for (let category of categoryMenuItems) {
          if (category.classList.contains('guitar')) {
            category.classList.add('menu-open')
          } else {
            category.classList.remove('menu-open')
          }
        }
      }

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
    let currentItem = category;

    if (currentItem.classList.contains('classic-guitar')) {
      for (let subcategory of subcategoryMenuItems) {
        if (subcategory.classList.contains('classic-guitar')) {
          subcategory.classList.add('menu-open')
        } else {
          subcategory.classList.remove('menu-open')
        }
      }
    }

    if (currentItem.classList.contains('bass-accoustic')) {
      for (let subcategory of subcategoryMenuItems) {
        if (subcategory.classList.contains('bass-accoustic')) {
          subcategory.classList.add('menu-open')
        } else {
          subcategory.classList.remove('menu-open')
        }
      }
    }

    if (currentItem.classList.contains('people-item')) {
      for (let subcategory of subcategoryMenuItems) {
        if (subcategory.classList.contains('people-item')) {
          subcategory.classList.add('menu-open')
        } else {
          subcategory.classList.remove('menu-open')
        }
      }
    }

    if (currentItem.classList.contains('bass')) {
      for (let subcategory of subcategoryMenuItems) {
        if (subcategory.classList.contains('bass')) {
          subcategory.classList.add('menu-open')
        } else {
          subcategory.classList.remove('menu-open')
        }
      }
    }

    if (currentItem.classList.contains('ukulele')) {
      for (let subcategory of subcategoryMenuItems) {
        if (subcategory.classList.contains('ukulele')) {
          subcategory.classList.add('menu-open')
        } else {
          subcategory.classList.remove('menu-open')
        }
      }
    }

    if (currentItem.classList.contains('prots')) {
      for (let subcategory of subcategoryMenuItems) {
        if (subcategory.classList.contains('prots')) {
          subcategory.classList.add('menu-open')
        } else {
          subcategory.classList.remove('menu-open')
        }
      }
    }
  }
}
