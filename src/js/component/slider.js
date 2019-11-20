import "slick-carousel";

function slider() {
  $('ul.slider').slick({
    dots: true,
    arrows: false,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  });
};

export default slider();