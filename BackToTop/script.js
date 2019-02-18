$(document).ready(function($){

    let $btn = $('.btn-top');

    $(window).on('scroll', function() {
        if ($(window).scrollTop() >= 20) {
            $btn.fadeIn();
        } else {
            btn.fadeOut();
        }
    });

    $btn.on('click', function() {
        $('html, body').animate({scrollTop:0}, 900);
    });
});
