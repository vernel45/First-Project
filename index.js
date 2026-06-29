function openMenu() {
	document.body.classList += "menu--open"
}

function closeMenu() {
	body.classList.remove('menu--open');
}

if (menuButton && closeButton) {
	menuButton.addEventListener('click', openMenu);
	closeButton.addEventListener('click', closeMenu);
}

menuLinks.forEach((link) => {
	link.addEventListener('click', closeMenu);
});