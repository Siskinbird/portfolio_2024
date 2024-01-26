import * as myFunctions from './modules/functions.js';

myFunctions.isWebp();
myFunctions.menuToggle()

// import Swiper, {Navigation, Pagination} from 'swiper';
import Typed from 'typed.js';

const typed = new Typed("#type-it", {
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

// const swiper = new Swiper();




