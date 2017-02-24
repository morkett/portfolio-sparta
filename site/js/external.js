$(document).ready(function() {
//   $("#js-projects-panel").click(function(){
//     event.preventDefault();
//     $(this).addClass("no-scroll");
//
//         if ( $( this ).hasClass( "no-scroll" ) ) {
//                $('html,body').animate({scrollTop:$(this.hash).offset().top}, 700);
//            }
//
// });

var stickyTop = $('.mdl-tabs__tab-bar').offset().top;

$(window).on( 'scroll', function(){
        if ($(window).scrollTop() >= stickyTop) {
          console.log("hit");
            $('.mdl-tabs__tab-bar').addClass("js-scroll-fix");
            $(".mdl-tabs__panel ul").addClass("js-scroll-padding");
        } else {
            $('.mdl-tabs__tab-bar').removeClass("js-scroll-fix");
            $(".mdl-tabs__panel ul").removeClass("js-scroll-padding");
        }
    });


});
