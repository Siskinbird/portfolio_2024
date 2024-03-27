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
  $('.filter li').click(function() {
    $(this).addClass('active').siblings().removeClass('active');
  });
}

/**================================================================================*/
/**-----------------------------PORTFOLIO GALLERY----------------------------------*/
/**================================================================================*/
const portfolioItem = document.getElementsByClassName('portfolio-item')
const portfolioAll = document.getElementById("portfolio-all");
const portfolioLayout = document.getElementById("portfolio-layout");
const portfolioApps = document.getElementById("portfolio-apps");
const pointer = document.getElementsByClassName('pointer')
const portfolioFilter = document.getElementById('filter')

portfolioFilter.addEventListener('click', function (event) {
  if(event.target === portfolioApps) {
    portfolioItem[1].style.opacity = '0';
    portfolioItem[1].style.transform = 'scale(0)';
    portfolioItem[1].style.transition = '.5s';
    //portfolioItem[1].style.display = 'none';

    portfolioItem[2].style.opacity = '0';
    portfolioItem[2].style.transform = 'scale(0)';
    portfolioItem[2].style.transition = '.5s';
    //portfolioItem[2].style.display = 'none';

    portfolioItem[3].style.opacity = '0';
    portfolioItem[3].style.transform = 'scale(0)';
    portfolioItem[3].style.transition = '.5s';
    //portfolioItem[3].style.display = 'none';

    portfolioItem[5].style.opacity = '0';
    portfolioItem[5].style.transform = 'scale(0)';
    portfolioItem[5].style.transition = '.5s';
    // portfolioItem[5].style.display = 'none';

    portfolioItem[0].style.opacity = '1';
    portfolioItem[0].style.transform = 'scale(1)';
    portfolioItem[0].style.display = 'block';
    portfolioItem[0].style.transition = '.5s';

    portfolioItem[4].style.display = 'block';
    portfolioItem[4].style.transform = 'scale(1)';
    portfolioItem[4].style.opacity = '1';
    portfolioItem[4].style.transition = '.5s';
    portfolioItem[4].style.top = '0';

  }else if(event.target === portfolioLayout) {
    portfolioItem[0].style.opacity = '0';
    portfolioItem[0].style.transform = 'scale(0)';
    portfolioItem[0].style.transition = '.5s';
    //portfolioItem[0].style.display = 'none';

    portfolioItem[4].style.opacity = '0';
    portfolioItem[4].style.transform = 'scale(0)';
    portfolioItem[4].style.transition = '.5s';
    //portfolioItem[4].style.display = 'none';

    portfolioItem[1].style.display = 'block';
    portfolioItem[1].style.opacity = '1';
    portfolioItem[1].style.transform = 'scale(1)';
    portfolioItem[1].style.transition = '.5s';
    portfolioItem[1].style.top = '0';
    portfolioItem[1].style.left = '0';

    portfolioItem[2].style.display = 'block';
    portfolioItem[2].style.opacity = '1';
    portfolioItem[2].style.transform = 'scale(1)';
    portfolioItem[2].style.transition = '.5s';
    portfolioItem[2].style.top = '0';
    portfolioItem[2].style.left = '33.3319%';

    portfolioItem[3].style.display = 'block';
    portfolioItem[3].style.opacity = '1';
    portfolioItem[3].style.transform = 'scale(1)';
    portfolioItem[3].style.transition = '.5s';
    portfolioItem[3].style.top = '0';
    portfolioItem[3].style.left = '66.6638%';

    portfolioItem[5].style.display = 'block';
    portfolioItem[5].style.opacity = '1';
    portfolioItem[5].style.transform = 'scale(1)';
    portfolioItem[5].style.transition = '.5s';
    portfolioItem[5].style.top = '28%';
    portfolioItem[5].style.left = '0';

  }else if(event.target === portfolioAll) {
    portfolioItem[0].style.opacity = '1';
    portfolioItem[0].style.transform = 'scale(1)';
    portfolioItem[0].style.transition = '.5s';
    portfolioItem[0].style.display = 'block';
    portfolioItem[0].style.top = '0';
    portfolioItem[0].style.left = '0';

    portfolioItem[1].style.display = 'block';
    portfolioItem[1].style.opacity = '1';
    portfolioItem[1].style.transform = 'scale(1)';
    portfolioItem[1].style.transition = '.5s';
    portfolioItem[1].style.top = '0';
    portfolioItem[1].style.left = '33.3319%';

    portfolioItem[2].style.display = 'block';
    portfolioItem[2].style.opacity = '1';
    portfolioItem[2].style.transform = 'scale(1)';
    portfolioItem[2].style.transition = '.5s';
    portfolioItem[2].style.top = '0';
    portfolioItem[2].style.left = '66.3338%';

    portfolioItem[3].style.display = 'block';
    portfolioItem[3].style.opacity = '1';
    portfolioItem[3].style.transform = 'scale(1)';
    portfolioItem[3].style.transition = '.5s';
    portfolioItem[3].style.top = '38%';
    portfolioItem[3].style.left = '0';

    portfolioItem[4].style.display = 'block';
    portfolioItem[4].style.opacity = '1';
    portfolioItem[4].style.transform = 'scale(1)';
    portfolioItem[4].style.transition = '.5s';
    portfolioItem[4].style.top = '28%';
    portfolioItem[4].style.left = '33.3319%';

    portfolioItem[5].style.display = 'block';
    portfolioItem[5].style.opacity = '1';
    portfolioItem[5].style.transform = 'scale(1)';
    portfolioItem[5].style.transition = '.5s';
    portfolioItem[5].style.top = '48%';
    portfolioItem[5].style.left = '66.3338%';
  }

})
