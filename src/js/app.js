import * as myFunctions from './modules/functions.js';
import $ from "jquery";
import {portfolioLinkToggle} from "./modules/functions.js";

myFunctions.isWebp();
myFunctions.menuToggle();
myFunctions.portfolioLinkToggle();
myFunctions.addLightTheme();


let sections = $('section')
    , nav = $('nav')
    , nav_height = nav.outerHeight();

$(window).on('scroll', function () {
    let cur_pos = $(this).scrollTop();

    sections.each(function() {
        let top = $(this).offset().top - nav_height,
            bottom = top + $(this).outerHeight();

        if (cur_pos >= top && cur_pos <= bottom) {
            nav.find('a').removeClass('active');
            sections.removeClass('active');

            $(this).addClass('active');
            nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
        }
    });
});

nav.find('a').on('click', function () {
    let $el = $(this)
        , id = $el.attr('href');

    $('html, body').animate({
        scrollTop: $(id).offset().top - nav_height
    }, 500);

    return false;
});


/** * TEST BLOCK*/



