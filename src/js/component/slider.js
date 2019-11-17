import "slick-carousel";

function slider() {
  $('ul.slider').slick({
    autoplay: false,
    dots: true,
    arrows: false
  });
}

export default slider();