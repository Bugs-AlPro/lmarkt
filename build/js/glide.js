new Glide('.promo-slider', {
  type: 'carousel',
  startAt: 0,
  animationDuration: 1000,
  perView: 1
}).mount()

new Glide('.pop-category-slider', {
  type: 'carousel',
  startAt: 0,
  animationDuration: 800,
  perView: 4,
  gap: 10,
  breakpoints: {
    992: {
      perView: 3
    }
  }
}).mount();

new Glide('.pop-items-slider', {
  type: 'carousel',
  startAt: 0,
  animationDuration: 1000,
  breakpoints: {
    992: {
      perView: 2
    }
  },
  perView: 4
}).mount()

new Glide('.tools-type-slider', {
  type: 'carousel',
  startAt: 0,
  animationDuration: 1000,
  breakpoints: {
    992: {
      perView: 3,
      peek: {
        before: 0,
        after: 70
      }
    }
  },
  perView: 5
}).mount()

var suggestion = new Glide('.suggestion-slider', {
  breakpoints: {
    992: {
      perView: 1,
      type: 'carousel',
      startAt: 0,
      animationDuration: 1000
    }
  }
});

if (window.screen.width < 992) {
  suggestion.mount();
}



