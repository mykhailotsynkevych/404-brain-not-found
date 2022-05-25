$('[data-slider-for]').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  // arrows: false,
  // fade: true,
  asNavFor: '[data-slider-nav]',
});

$('[data-slider-nav]').slick({
  mobileFirst: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '[data-slider-for]',
  dots: false,
  nextArrow: $('.reviews__arrow--next'),
  prevArrow: $('.reviews__arrow--prev'),
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 7,
        slidesToScroll: 1,
      },
    },
  ],
});
