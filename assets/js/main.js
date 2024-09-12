/*navigation Bar Function*/
function myMenuFunction() {
  var menuBtn = document.getElementById("myNavMenu");
  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

/*--Add shadow on navigation bar while scrolling--*/
window.onscroll = function () {
  headerShadow();
};

function headerShadow() {
  const navHeader = document.getElementById("header");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navHeader.style.boxShadow = "0 1px 6px rgba(0,0,0,0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";
  }
}
/*--Typing Effect--*/
var typingEffect = new Typed(".typedText", {
  strings: ["Welcome to My Portfolio", "I'm a Software Development Student"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000,
});

/*Social Reveal Animations*/
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  reset: true,
});
/*home*/
sr.reveal(".featured-text-cart", {});
sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".featured-text-info", { delay: 200 });
sr.reveal(".featured-text-btn", { delay: 200 });
sr.reveal(".social_icon", { delay: 200 });
sr.reveal(".featured-image", { delay: 300 });

/*--Project Box--*/
sr.reveal(".project-box", { interval: 200 });

/*--Heading--*/
sr.reveal(".top-header", {});

/*--About info And  Contact info--*/
const srLeft = ScrollReveal({
  origin: "left",
  distance: "80px",
  duration: 2000,
  reset: true,
});
srLeft.reveal(".about-info", { delay: 100 });
srLeft.reveal(".contact-info", { delay: 100 });

/*--About skill And Form Box--*/
const srRight = ScrollReveal({
  origin: "rightt",
  distance: "80px",
  duration: 2000,
  reset: true,
});
srRight.reveal(".skills-box", { delay: 100 });
srRight.reveal(".form-control", { delay: 100 });

/*--Change Active link--*/
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector(".nav-link[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};
