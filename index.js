const body = document.body;
const menuButton = document.querySelector(".btn__menu");
const closeButton = document.querySelector(".btn__menu--close");
const menuLinks = document.querySelectorAll(".menu__link");

function openMenu() {
  body.classList.add("menu--open");
}

function closeMenu() {
  body.classList.remove("menu--open");
}

menuButton.addEventListener("click", openMenu);
closeButton.addEventListener("click", closeMenu);

menuLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});