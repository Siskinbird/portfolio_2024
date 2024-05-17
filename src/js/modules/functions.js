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
/**================================================================================*/
/**-----------------------------PRELOADER ANIMATION--------------------------------*/
/**================================================================================*/




/**================================================================================*/
/**--------------------------------BURGER ANIMATION--------------------------------*/
/**================================================================================*/

/**Left header open/close */
export const menuToggle = () => {
  
  $(function () {
    $('.burger').on('click', function (e) {
      $('.header-left').toggleClass('menu-open');
      $('.burger').toggleClass('open');
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
    delay: 10000,
  },
  slidesPerView: "auto",

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
    direction: 'horizontal',
  }
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


//let allItems = document.getElementsByClassName('grid-item');
let links = document.querySelectorAll('.pointer');

let allBtn = document.getElementById(showAll);
let layoutBtn = document.getElementById(showLayout);
let appsBtn = document.getElementById(showApps);

$(document).ready(function() {
  $('#showLayout').click(function() {
    $('.layout').css('display', 'block' )
    $('.layout').css('transform', 'scale(1)')
    $('.all').css('display', 'none' )
    $('.apps').css('display', 'none' )
  })
})
$(document).ready(function() {
  $('#showApps').click(function() {
    $('.layout').css('display', 'none' )
    $('.all').css('display', 'none' )
    $('.apps').css('display', 'block' )
    $('.apps').css('transform', 'scale(1)')
  })
})
$(document).ready(function() {
  $('#showAll').click(function() {
    $('.layout').css('display', 'none' )
    $('.layout').css('transform', 'scale(0)')
    $('.all').css('display', 'block' )
    $('.all').css('transform', 'scale(1)')
    $('.apps').css('display', 'none' )
    $('.apps').css('transform', 'scale(0)')
  })
})


/**================================================================================*/
/**----------------------------------CHANGE THEME----------------------------------*/
/**================================================================================*/

const themeSwitch = document.querySelector('.theme-switcher');
const body = document.getElementById('body');

themeSwitch.addEventListener('click', () => {
  console.log('click')


    if (localStorage.getItem('theme') === 'lightTheme') {
        localStorage.removeItem('theme')
        body.classList.remove('lightTheme')
    } else {
        localStorage.setItem('theme', 'lightTheme')
        body.classList.add('lightTheme')
    }
})

/** Add theme in to local storage*/

export const addLightTheme = () => {
    try {
        if (localStorage.getItem('theme') === 'lightTheme') {
            body.classList.add('lightTheme')
        } else {
            body.classList.remove('lightTheme')
        }
    } catch (err) {
        console.log('Something went wrong')
    }
}

addLightTheme();
