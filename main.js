'use strict';

// Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  // scroll값 확인
  // console.log(window.scrollY);
  // console.log(navbarHeight);

  if (window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }

  navbarMenu.classList.remove('open');

});


const navbarMenu = document.querySelector('.navbar__menu');
const navnarToggleBtn = document.querySelector('.navbar__toggle-btn');

// Handle scrolling when tapping on the navbar menu
navbarMenu.addEventListener('click', (event) => {
  
  //클릭 이벤트 확인
  // console.log(event.target);
  console.log(event.target.dataset.link);
  
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  navbarMenu.classList.remove('open');
  //function 사용
  scrollIntoView(link);

});

//Navbar toggle button for small screen
navnarToggleBtn.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
});

// Handle click on "contact me" button on home
const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click', () => {
  scrollIntoView('#contact');
});

// Make home slowly fade to transparent as the window scrolls down
// const home = document.querySelector('#home');
// const homeHeight = home.getBoundingClientRect().height;
// document.addEventListener('scroll', () => {
//   home.style.opacity = 1 - window.scrollY / homeHeight;
// });


// Show "arrow up" button when scrolling down
const home = document.querySelector('#home');
const homeHeight = home.getBoundingClientRect().height;
const arrowUp = document.querySelector('.arrow-up');

document.addEventListener('scroll', () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.classList.add('visible');
  } else {
    arrowUp.classList.remove('visible');
  }
});

// Handle click on the "arrow up" button
arrowUp.addEventListener('click', () => {
  scrollIntoView('#home');
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: 'smooth' });
}
  
