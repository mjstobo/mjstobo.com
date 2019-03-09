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

window.onload = () => {
var projectIcon = document.getElementsByClassName('expand');
var projectPanel = document.getElementsByClassName('proj-expand');
var projectSection = document.getElementsByClassName('project-item');
var iconSet = document.getElementsByClassName('icon-img');

for(let icon in projectIcon){
    projectIcon[icon].addEventListener('click', () => {
        switch (projectPanel[icon].className) {
            case 'proj-expand active':
                projectPanel[icon].className = 'proj-expand inactive';
                projectSection[icon].className = 'project-item inactive';
                iconSet[icon].setAttribute('src', './plus.png');
                break;
            case 'proj-expand inactive':
                projectPanel[icon].className = 'proj-expand active';
                projectSection[icon].className = 'project-item active';
                iconSet[icon].setAttribute('src', './minus.png');
                break;
            default:
                break;
        }
    });
}
}




