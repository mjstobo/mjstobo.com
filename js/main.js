import Typed from 'typed.js';

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
});

var typed = new Typed('.typed', {
    strings: ["digital enthusiast.", "digital native.", "digital nerd.", "Crows supporter."],
    typeSpeed: 30,
    backSpeed: 30,
    backDelay: 700,
    showCursor: false,
    smartBackspace: true
  });
  