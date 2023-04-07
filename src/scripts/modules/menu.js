// Burger Menu toggle

const menuButton = document.querySelector('[data-menu="button"]');
const menuList = document.querySelector('[data-menu="list"]');

const toggleActive = () => {
  menuButton.classList.toggle('active');
  menuList.classList.toggle('active');
}

menuButton.addEventListener('click', toggleActive);
