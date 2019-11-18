import "slick-carousel";

function slider() {
  $('ul.slider').slick({
    dots: true,
    arrows: false,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3500,
  });
};

export default slider();