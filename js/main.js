(function() {
    let language = navigator.language;

    $('.mobile-menu').on('click', function() {
      $('.header__nav').slideDown();
    });

    $('.header__close-button').on('click', function() {
      $('.header__nav').slideUp();
    });
}());

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
      0:{
        items:1,
        nav:false
      },
      600:{
        items:1,
        nav:true
      },
      1000:{
        items:1,
        nav:true
      }
    }
  });
});