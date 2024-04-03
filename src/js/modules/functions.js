import {Autoplay, Navigation, Pagination} from 'swiper/modules';
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
  slidesPerView: 'auto',

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
// console.log(window.screen.availWidth);
/**================================================================================*/
/**-----------------------------PORTFOLIO GALLERY----------------------------------*/
/**================================================================================*/

//   const portfolioItem = document.getElementsByClassName('portfolio-item')
//   const pointer = document.getElementsByClassName('pointer')
//   const portfolioFilter = document.getElementById('portfolio-filter')

// portfolioFilter.addEventListener('click', function (event) {
//   let screenSize  = window.screen.availWidth;
//   console.log(window.screen.availWidth);
//   if(event.target === pointer[2]) {
//     for(let item of portfolioItem) {
//       if(item.classList.contains('apps')){
//         item.classList.remove('hide-item')
//         item.classList.add('show-item')
//       } else {
//         item.classList.add('hide-item')
//       }
//     }
//     if (400 > screenSize < 576) {
//       console.log("poop");
//       //portfolioItem[4].style.left = '0';
//       portfolioItem[4].style.top = '20%';
//     }
//     if(screenSize < 400) {
//       portfolioItem[4].style.top = '17% !important';
//     }
//     if(screenSize < 365) {
//       portfolioItem[4].style.top = '14%';
//     }
//     // else {
//     //   portfolioItem[4].style.top = '0';
//     // }


//   }else if(event.target === pointer[1]) {
//     for(let item of portfolioItem) {
//       if(item.classList.contains('layout')){
//         item.classList.add('show-item')
//         item.classList.remove('hide-item')
//       } else {
//         item.classList.add('hide-item')
//       }
//     }

//     portfolioItem[1].style.top = '0';
//     portfolioItem[1].style.left = '0';

//     portfolioItem[2].style.top = '0';
//     portfolioItem[2].style.left = '33.3319%';

//     portfolioItem[3].style.top = '0';
//     portfolioItem[3].style.left = '66.6638%';

//     portfolioItem[5].style.top = '28%';
//     portfolioItem[5].style.left = '0';

//   }else if(event.target === pointer[0]) {
//     for(let item of portfolioItem) {
//       item.classList.remove('hide-item')
//     }
//     portfolioItem[0].style.top = '0';
//     portfolioItem[0].style.left = '0';

//     portfolioItem[1].style.top = '0';
//     portfolioItem[1].style.left = '33.3319%';

//     portfolioItem[2].style.top = '0';
//     portfolioItem[2].style.left = '66.3338%';

//     portfolioItem[3].style.top = '38%';
//     portfolioItem[3].style.left = '0';

//     portfolioItem[4].style.top = '28%';
//     portfolioItem[4].style.left = '33.3319%';

//     portfolioItem[5].style.top = '48%';
//     portfolioItem[5].style.left = '66.3338%';
//   }
// });
// window.addEventListener(`resize`, event => {
//   let windowWidthSize = window.innerWidth;
//   if(windowWidthSize > 320 < 576) {
//     portfolioItem[0].style.top = '0'
//     portfolioItem[0].style.left = '0'
//     portfolioItem[0].style.width = '100%'
//     portfolioItem[1].style.top = '40%'
//     portfolioItem[1].style.width = '100%'
//     portfolioItem[1].style.left = '0'
//     portfolioItem[2].style.top = '60%'
//     portfolioItem[2].style.left = '0'
//     portfolioItem[2].style.width = '100%'
//     portfolioItem[3].style.top = '30%'
//     portfolioItem[3].style.left = '0'
//     portfolioItem[4].style.top = '40%'
//     portfolioItem[4].style.left = '0'
//     portfolioItem[5].style.top = '40%'
//     portfolioItem[5].style.left = '0'
//   }
//   console.log(windowWidthSize);
// });

let items = document.getElementsByClassName('grid-item');

document.getElementById('showAllItems').addEventListener('click', function(event) {
  console.log(items)
  for(let item in items) {
    console.log(item)
    item.target.classList.add('.show');
  }
})


// document.getElementById('showAllItems').addEventListener('click', function(event) {
//   event.preventDefault();
//   items.forEach(function(item) {
//     if(event.target.classList.contains('.hidden')) {
//       item.classList.remove('hidden');
//       item.classList.add('show');
//     }
//   });
// });

// document.getElementById('removeLastItems').addEventListener('click', function(event) {
//   event.preventDefault();

//   var items = document.querySelectorAll('.grid-item');
//   var itemsToRemove = Array.prototype.slice.call(items, -2);

//   itemsToRemove.forEach(function(item) {
//       item.classList.add('hidden');
//       setTimeout(function() {
//           item.remove();
//       }, 500);
//   });
// });

// document.getElementById('removeFirstItems').addEventListener('click', function(event) {
//   event.preventDefault();

//   var items = document.querySelectorAll('.grid-item');
//   var itemsToRemove = Array.prototype.slice.call(items, 0, 1);

//   itemsToRemove.forEach(function(item) {
//       item.classList.add('hidden');
//       setTimeout(function() {
//           item.remove();
//       }, 500);
//   });
// });

// document.getElementById('showAllItems').addEventListener('click', function(event) {
//   event.preventDefault();

//   var items = document.querySelectorAll('.grid-item.hidden');
//   items.forEach(function(item) {
//       item.classList.remove('hidden');
//       setTimeout(function() {
//           item.classList.add('show');
//       }, 100);
//   });
// });