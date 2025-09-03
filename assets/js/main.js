// main.js - Your existing code plus project management

// Typed.js effect
var typingEffect = new Typed(".typedText", {
  strings: ["Hello!, I'm Sothak", "I'm a Software Development Student", "Of IT Academy Step Cambodia"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000,
});

// ScrollReveal animations
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

sr.reveal(".featured-text-card", {});
sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".featured-text-info", { delay: 200 });
sr.reveal(".featured-text-btn", { delay: 200 });
sr.reveal(".social_icons", { delay: 200 });
sr.reveal(".featured-image", { delay: 300 });

sr.reveal(".project-box", { interval: 200 });
sr.reveal(".top-header", {});

// Navigation menu functionality
const menuBtn = document.querySelector(".nav-menu-btn");
const navigation = document.querySelector(".nav-menu");

if (menuBtn && navigation) {
  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
  });
}

// Active navigation link
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector(".active")?.classList.remove("active");
    link.classList.add("active");
  });
});

// Menu function for mobile
function myMenuFunction() {
  var menuBtn = document.getElementById("myNavMenu");
  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

