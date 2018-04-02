import "babel-polyfill";
import Typed from 'typed.js';

$(window).scroll(function () {
    if ($(window).scrollTop() >= $(window).height()) {
        $('nav').addClass('fixed-header');
    } else {
        $('nav').removeClass('fixed-header');
    }
});

$('.autoscroll').click(() => {
    $('html, body').animate({
        scrollTop: $('.navbar').offset().top - ($('nav').outerHeight(true) * 1.05)
    }, 400);
});


var projectIcon = document.getElementsByClassName('expand');
var projectPanel = document.getElementsByClassName('proj-expand');
var projectSection = document.getElementsByClassName('project-item');
var iconFirst = document.getElementById('icon-first');
var iconSecond = document.getElementById('icon-second');


projectIcon[1].addEventListener('click', function () {
    var x = projectPanel[1].className;
    switch (x) {
        case 'proj-expand active':
            projectPanel[1].className = 'proj-expand inactive';
            projectSection[1].className = 'project-item inactive';
            iconSecond.setAttribute('src', './plus.png');
            break;
        case 'proj-expand inactive':
            projectPanel[1].className = 'proj-expand active';
            projectSection[1].className = 'project-item active';
            iconSecond.setAttribute('src', './minus.png');
            break;
        default:
            break;
    }
}, false);

projectIcon[0].addEventListener('click', function () {
    var x = projectPanel[0].className;
    switch (x) {
        case 'proj-expand active':
            projectPanel[0].className = 'proj-expand inactive';
            projectSection[0].className = 'project-item inactive';
            iconFirst.setAttribute('src', './plus.png');
            break;
        case 'proj-expand inactive':
            projectPanel[0].className = 'proj-expand active';
            projectSection[0].className = 'project-item active';
            iconFirst.setAttribute('src', './minus.png');
            break;
        default:
            break;
    }
}, false);





var typed = new Typed('.typed', {
    strings: ["digital enthusiast.", "digital native.", "Pug owner.", "Crows supporter."],
    typeSpeed: 30,
    backSpeed: 30,
    backDelay: 700,
    showCursor: false,
    smartBackspace: true
});
