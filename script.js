const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

// aside nav
const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};
mobileNav.addEventListener("click", () => toggleNav());

// goto top functionality
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 200) {
    // Show the button when scrolling past 200 pixels
    document.getElementById("go-to-top").style.display = "block";
  } else {
    document.getElementById("go-to-top").style.display = "none";
  }
});

document.getElementById("go-to-top").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// form validation
