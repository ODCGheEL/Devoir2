const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

const contactForm = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const subjectInput = document.getElementById("Subject");
const nameError = document.querySelector(".form-group #name + .error-p");
const emailError = document.querySelector(".form-group #email + .error-p");
const subjectError = document.querySelector(".form-group #Subject + .error-p");

// aside nav
const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

mobileNav.addEventListener("click", () => toggleNav());
// document.addEventListener("keydown", () => toggleNav());

document.addEventListener("click", (e) => {
  if (!navbar.contains(e.target) && !mobileNav.contains(e.target)) {
    navbar.classList.remove("active");
    mobileNav.classList.remove("hamburger-active");
  }
});

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
contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let isValid = true;

  // Validate name
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name cannot be empty.";
    nameError.classList.add("error-p-active");
    isValid = false;
  } else {
    nameError.textContent = "";
    nameError.classList.remove("error-p-active");
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value.trim())) {
    emailError.textContent = "Please enter a valid email address.";
    emailError.classList.add("error-p-active");
    isValid = false;
  } else {
    emailError.textContent = "";
    emailError.classList.remove("error-p-active");
  }

  // Validate subject
  if (subjectInput.value.trim() === "") {
    subjectError.textContent = "Subject cannot be empty.";
    subjectError.classList.add("error-p-active");
    isValid = false;
  } else {
    subjectError.textContent = "";
    subjectError.classList.remove("error-p-active");
  }

  if (isValid) {
    alert("Thank you for contacting us!");
  }
});