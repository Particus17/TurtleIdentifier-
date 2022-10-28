//mobile hamburger menu
const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');

  //make the button do stuff
openMenu.addEventListener('click', show)
closeMenu.addEventListener('click', close)

function show(){
  mainMenu.style.display = 'flex';
  mainMenu.style.top = '0';
}
function close(){
  mainMenu.style.top = '-100%';
}



//identify slider
var swiper = new Swiper(".slide-content", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

