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

export const menuToggle = () => {
  let sidebar = document.getElementById('header-left');
  let toggler = document.getElementById('toggle-menu');
  toggler.addEventListener('click', () => {
    if (!toggler.classList.contains('open')) {
      toggler.classList.add('open');
      sidebar.style.left = 0;
    } else {
      toggler.classList.remove('open');
      sidebar.style.left = '-300px';
    }
  })
}


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

