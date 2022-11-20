$(document).ready(function () {

  // $(".stick-area").sticky({topSpacing:0});

  $(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 550) {
        $(".stick-area").addClass("is-stick");
    } else {
        $(".stick-area").removeClass("is-stick");
    }
});

  var footerHeight = $(".site-footer").height();
  $(".site-main-wrapper").css('margin-bottom', footerHeight + 'px');

});