$('.slider-for-js').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  // fade: true,
  asNavFor: '.slider-nav-js',
});

$('.slider-nav-js').slick({
  mobileFirst: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  // infinity: true,
  // speed: 400,
  autoplay: true,
  autoplaySpeed: 3000,
  asNavFor: '.slider-for-js',
  dots: false,
  centerMode: true,
  focusOnSelect: true,
  centerPadding: '0px',
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
