const burger = document.querySelector('.burger');
const headerMob = document.querySelector('.header-mob');
const body = document.querySelector('body');

console.log(burger);

// burger.addEventListener('click', function() {
//   burger.classList.toggle('burger_active');
//   headerMob.classList.toggle('header-mob_active');
// });

burger.addEventListener('click', function(e) {
  this.classList.toggle('burger_active');
  headerMob.style.display = (headerMob.style.display === 'none') ? 'block' : 'none';
  body.classList.toggle('no-scroll');
  // let elem = e.target
  // console.log(elem);
  // if (this.classList.contains('burger_active')) {
  //   console.log("is active");
  // } else {
  //   console.log("not active");
  // }
});




// (() => {
//   const mobileMenu = document.querySelector('.js-menu-container');
//   const openMenuBtn = document.querySelector('.js-open-menu');
//   const closeMenuBtn = document.querySelector('.js-close-menu');

//   const toggleMenu = () => {
//     const isMenuOpen =
//       openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
//     openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
//     mobileMenu.classList.toggle('is-open');

//     const scrollLockMethod = !isMenuOpen
//       ? 'disableBodyScroll'
//       : 'enableBodyScroll';
//     bodyScrollLock[scrollLockMethod](document.body);
//   };

//   openMenuBtn.addEventListener('click', toggleMenu);
//   closeMenuBtn.addEventListener('click', toggleMenu);

//   // Close the mobile menu on wider screens if the device orientation changes
//   window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
//     if (!e.matches) return;
//     mobileMenu.classList.remove('is-open');
//     openMenuBtn.setAttribute('aria-expanded', false);
//     bodyScrollLock.enableBodyScroll(document.body);
//   });
// })();