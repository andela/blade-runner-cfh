

// $(window).on('load', () => {
// AOS.refresh();
// });

$(window).scroll(() => {
  if ($(window).scrollTop() > 100) {
    $('.navbar').addClass('scrolled bg-blue');
  } else{
    $('.navbar').removeClass('scrolled bg-blue');
  }
});

function animateHomeLink(e) {
    e.preventDefault();
    console.log('home link was clicked.');
}