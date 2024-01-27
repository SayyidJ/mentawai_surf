// JavaScript for handling scroll behavior
const navbar = document.getElementById("navbar");
const navbarMobile = document.getElementById("navbar-mobile");
const overlayTrigger = document.getElementById("nav-overlay-trigger");
const overlay = document.getElementById("nav-overlay");
let lastScrollTop = 0;

window.addEventListener("scroll", function () {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  //scrolldown
  if (scrollTop > lastScrollTop) {
    navbar.classList.add("-translate-y-full");
    navbarMobile.classList.add("-translate-y-full");
    overlay.classList.add("translate-x-full");
  }
  //scroll up
  else {
    navbar.classList.remove("-translate-y-full");
    navbarMobile.classList.remove("-translate-y-full");
  }
  lastScrollTop = scrollTop;
});

//toggle mobile nav
document.addEventListener("DOMContentLoaded", function () {
  overlayTrigger.addEventListener("click", function () {
    overlay.classList.toggle("translate-x-full");
  });
  overlay.addEventListener("click", function () {
    overlay.classList.add("translate-x-full");
  });

  document.getElementById("body").addEventListener("click", function () {
    overlay.classList.add("translate-x-full");
  });
});
