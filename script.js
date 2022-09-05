const navLinks = document.querySelector('.nav-links');
const burger = document.querySelector('.burger');

const navSlide = () => {
  burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
  });
};

navSlide();
