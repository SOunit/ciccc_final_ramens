/*=main slide=*/
$(".slider").slick({
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 1000,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: '<div class="slick-prev"></div>',
  nextArrow: '<div class="slick-next"></div>',
  dots: true,
  pauseOnFocus: false,
  pauseOnHover: false,
  pauseOnDotsHover: false,
});

$(window).scroll(function () {
  var pos = 800; //
  var pos = document.body.clientHeight / 3;
  if ($(this).scrollTop() > pos) {
    $(".ad").fadeIn();
  } else {
    $(".ad").fadeOut();
  }
});
