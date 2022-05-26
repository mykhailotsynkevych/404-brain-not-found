$('.slider-for').slick({
  mobileFirst: true,
  mobileFirst: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  infinite: false,
  asNavFor: '.slider-nav',
  responsive: [
    {
      breakpoint: 767,
      settings: {
        arrows: true,
      },
    },
  ],
});

$('.slider-nav').slick({
  mobileFirst: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false,
  infinite: false,
  asNavFor: '.slider-for',
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 7,
        slidesToScroll: 7,
        arrows: false,
        infinite: false,
      },
    },
  ],
});
