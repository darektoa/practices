import sliderData from './data/slider-data.js';
import { slideComponent } from './utilities/components.js';

$(document).ready(() => {
  $.each(sliderData, (index, item) => {
    const key = index + 1;
    const data = {key, ...item};
    $('.slider-preview').append(slideComponent(data));
    $('.slider-nav').append(slideComponent(data));
  });

  $('.slider-preview').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.slider-nav',
    fade: true,
  });

  $('.slider-nav').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.slider-preview',
    autoplay: true,
    autoplaySpeed: 1000,
    focusOnSelect: true,
  });
});