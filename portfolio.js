let mobileMenu = document.getElementById('hamburger-icon');

function toggleMobileMenu(menu) {
  menu.classList.toggle('open');
}

mobileMenu.addEventListener('click', () => {
  toggleMobileMenu(mobileMenu);
})