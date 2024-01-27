// JavaScript for handling scroll behavior
const navbar = document.getElementById("navbar");
let lastScrollTop = 0;
window.addEventListener("scroll", function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    navbar.classList.add("-translate-y-full");
  } else {
    navbar.classList.remove("-translate-y-full");
  }
  lastScrollTop = scrollTop;
});

//toggle mobile nav
document.addEventListener('DOMContentLoaded', function () {
  const overlayTrigger = document.getElementById('overlay-trigger');
  const overlay = document.getElementById('overlay');

  overlayTrigger.addEventListener('click', function () {
      overlay.classList.toggle('translate-x-full');
  });
});
