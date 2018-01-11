'use strict';

$(window).scroll(function () {
  if ($(window).scrollTop() > 100) {
    $('.navbar').addClass('scrolled bg-blue');
  } else {
    $('.navbar').removeClass('scrolled bg-blue');
  }
});