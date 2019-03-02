import "babel-polyfill";
import '../css/scss/main.scss';
import Typed from 'typed.js';

var typed = new Typed('.typed', {
    strings: ["JavaScript enthusiast.", "Pug owner.", "Crows supporter"],
    typeSpeed: 30,
    backSpeed: 30,
    backDelay: 800,
    showCursor: true,
    smartBackspace: true
});

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

for(let icon in projectIcon){
    projectIcon[icon].addEventListener('click', function () {
        var x = projectPanel[icon].className;
        switch (x) {
            case 'proj-expand active':
                projectPanel[icon].className = 'proj-expand inactive';
                projectSection[icon].className = 'project-item inactive';
                iconSecond.setAttribute('src', './plus.png');
                break;
            case 'proj-expand inactive':
                projectPanel[icon].className = 'proj-expand active';
                projectSection[icon].className = 'project-item active';
                iconSecond.setAttribute('src', './minus.png');
                break;
            default:
                break;
        }
    }, false);
}





