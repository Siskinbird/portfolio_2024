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