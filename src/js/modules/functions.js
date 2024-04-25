import {Autoplay, Navigation, Pagination, EffectFade} from 'swiper/modules';
import Swiper from "swiper";
import $ from "jquery";
Swiper.use([Autoplay, Navigation, Pagination]);


export const isWebp = () => {
  function testWebP(callback) {

  let webP = new Image();
  webP.onload = webP.onerror = function () {
  callback(webP.height === 2);
  };
  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }
  
  testWebP(function (support) {
    let className = support === true ? 'webp' : 'nj-webp';
    document.documentElement.classList.add(className);
  });
}

/**Left header open/close */
export const menuToggle = () => {
  $(function () {
    $('.toggle-menu').on('click', function (e) {
      $('.header-left').toggleClass('menu-open');
      e.stopPropagation();
      return false;
    });
  });
}

/**Swiper initialization*/

export const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  modules: [Navigation, Pagination, Autoplay],
  loop: true,
  allowTouchMove: true,
  autoplay: {
    delay: 5000,
  },
  slidesPerView: "auto",

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
    direction: 'horizontal',
  }
});

export const swiper2 = new Swiper(".portfolio-swiper", {
  spaceBetween: 30,
  slidesPerView: "auto",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/**Type text on head block*/

import Typed from 'typed.js';

export const typed = new Typed("#type-it", {
  strings: ["Frontend разработчик.", "Верстальщик", "Молодой человек"],
  typeSpeed: 75,
  backSpeed: 50,
  backDelay: 800,
  startDelay: 500,
  loop: true,
  showCursor: false,
  cursorChar: "|",
  attr: null,
});

/**Links toggle*/
export const portfolioLinkToggle = () => {
  $('.portfolio-filter__nav li').click(function() {
    $(this).addClass('active').siblings().removeClass('active');
  });
}


let allItems = document.getElementsByClassName('grid-item');
let links = document.querySelectorAll('.pointer');

let allBtn = document.getElementById(showAll);
let layoutBtn = document.getElementById(showLayout);
let appsBtn = document.getElementById(showApps);

$(document).ready(function() {
  $('#showLayout').click(function() {
    $('.apps').toggle('slow', 'swing')
  })
})


// function toggleShowApps() {
//   $(".layout").removeClass("show");
//   $(".layout").addClass("hide");
//   $(".apps").addClass("show");
// }

// function toggleShowLayout() {
//   console.log("aim kliknut")
//   $(".apps").removeClass("show");
//   $(".apps").addClass("hide");
//   $(".layout").addClass("show");
// }

// function toggleShowAll() {
//   $(".grid-item").addClass("show");
// }

// for(let i = 0; i<links.length; i++) {
//   links[0].addEventListener('click', toggleShowAll)
//   links[1].addEventListener('click', toggleShowLayout)
//   links[2].addEventListener('click', toggleShowApps)
// }

//links[0].addEventListener('click',  toggleShowAll())
// links[1].addEventListener('click',  toggleShowLayout())
// links[2].addEventListener('click',  toggleShowApps())