import "slick-carousel";

function slider() {
  $('ul.slider').slick({
    dots: true,
    arrows: false,
    slidesToShow: 1,
    autoplay: false,
    autoplaySpeed: 3000,
  });
};

export default slider();