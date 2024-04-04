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


let allItems = document.querySelectorAll('.grid-item');
let links = document.querySelectorAll('.pointer');

function layoutItems() {
  let layout = [];
allItems.forEach((item, index) => {
  if(item.classList.contains('layout')) {
    layout.push(item)
  }
  console.log(layout)
  return layout
})
}






// const changeImage = (event) => {
//   if(event.target.classList.contains('pointer')) {
//     const gallery = event.target.dataset.galery;
//     console.log(gallery)
//     items.forEach((img, index) => console.log(img.src=`/img/portfolio/${gallery}/${index + 1}.jpg`))
//   }
// }

links.forEach(link => {link.addEventListener('click',  layoutItems)})

