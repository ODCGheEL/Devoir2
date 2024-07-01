const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

// aside nav
const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());

// form validation
