'use strict';
//підключення бургера//
$(document).ready(function () {
   $('.header__burger').click(function (event) {
      $('.header__burger,.header__body-menu').toggleClass('active');
      $('body').toggleClass('lock')
   })
});




const header = document.querySelector('.header');

window.addEventListener('scroll', function () {
   let a = window.scrollY;

   if (a > 0) {
      header.classList.add('scrolled');
   }
   else {
      header.classList.remove('scrolled')
   }
})







