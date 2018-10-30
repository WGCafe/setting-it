(function() {
    let language = navigator.language;

    $('.mobile-menu').on('click', function() {
      $('.header__nav').slideDown();
    });

    $('.header__close-button').on('click', function() {
      $('.header__nav').slideUp();
    });
  }());