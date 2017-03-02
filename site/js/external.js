$(document).ready(function() {
  //
  // $('.mdl-layout__container').click(function(){
  //   console.log('hit');
  //   // event.preventDefault();
  //   // $('body').addClass('js-body-overflow');
  //   // $('html,body').animate({scrollTop: $(this.hash).offset().top - 50}, 700);
  //
  //
  // });


$('.js-panel-click').click(function(){

    event.preventDefault();
    $('html, body').animate({
    scrollTop: $("#projects-panel").position().top
}, 500);

});



  var stickyTop = $('.mdl-tabs__tab-bar').offset().top;

  $(window).on( 'scroll', function(){
    if ($(window).scrollTop() >= stickyTop) {
      $('.mdl-tabs__tab-bar').addClass('js-scroll-fix');
      $('.tab-padding').addClass('js-scroll-padding');
      $('.tab-padding-cv').addClass('js-scroll-padding-cv');
    } else {
      $('.mdl-tabs__tab-bar').removeClass('js-scroll-fix');
      $('.mdl-tabs__panel ul').removeClass('js-scroll-padding');
      $('.tab-padding-cv').removeClass('js-scroll-padding-cv');

    }
  });


});
