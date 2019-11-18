import "slick-carousel";

function slider() {
  $('ul.slider').slick({
    autoplay: false,
    dots: true,
    arrows: false,
    slidesToShow: 1
  });
}

export default slider();