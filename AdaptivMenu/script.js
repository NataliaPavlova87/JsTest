$(document).ready(function($){

    let $mobileTab = $('.mobile-tab');

    $mobileTab.hide();

    $('#burg').on('click', function() {
        $mobileTab.slideToggle(1000);
    });
});
