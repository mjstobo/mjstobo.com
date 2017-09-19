$(window).scroll(function(){
    if ($(window).scrollTop() >= $(window).height()) {
       $('nav').addClass('fixed-header');
    }
    else {
       $('nav').removeClass('fixed-header');
    }
});

$('.autoscroll').click(() => {
    $('html, body').animate({
        scrollTop: $('.navbar').offset().top - ($('nav').outerHeight(true) * 1.05)
    }, 400);
});v