'use strict';

//      TRANSPARENT MENU ON SCROLL
let scrollPos = window.scrollY;
const navBar = document.getElementById('main-nav');
console.log();
const position = 300;

const addTransparent = () => navBar.classList.add('transparent');
const removeSolid = () => navBar.classList.remove('solid');

const addSolid = () => navBar.classList.add('solid');
const removeTransparent = () => navBar.classList.remove('transparent');

window.addEventListener('scroll', function () {
  scrollPos = window.scrollY;

  if (scrollPos >= position) {
    removeTransparent();
    addSolid();
  } else {
    removeSolid();
    addTransparent();
  }
});

//        SCROLLSPY with IntersectionObserver

// let option = {
//   root: document.querySelector.('#scrollArea'),
//   rootMargin: '0px',
//   threshold: 0.5
// };

// let observer = new IntersectionObserver(callback, options);

// let target = document.querySelector('#section');
// observer.observe(target);
