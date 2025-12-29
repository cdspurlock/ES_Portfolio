/* =========================
   SCROLL REVEAL FOR ELEMENTS
========================= */
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
      el.style.transition = "0.6s ease-out";
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


/* =========================
   HERO ELEMENT FADE-IN
========================= */
const heroTitle = document.querySelector(".hero-title");
const heroSubtitle = document.querySelector(".hero-subtitle");
const heroButtons = document.querySelector(".hero-buttons");

if (heroTitle && heroSubtitle && heroButtons) {
  heroTitle.style.opacity = 0;
  heroSubtitle.style.opacity = 0;
  heroButtons.style.opacity = 0;

  window.addEventListener("load", () => {
    setTimeout(() => heroTitle.style.opacity = 1, 200);
    setTimeout(() => heroSubtitle.style.opacity = 1, 600);
    setTimeout(() => heroButtons.style.opacity = 1, 1000);
  });
}


/* =========================
   NAVBAR SCROLL EFFECT
========================= */
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});


/* =========================
   ACTIVE SECTION HIGHLIGHT
========================= */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 70; // offset for navbar
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});


/* =========================
   MOBILE HAMBURGER TOGGLE
========================= */
const hamburger = document.querySelector(".hamburger");
const navLinksContainer = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinksContainer.classList.toggle("show");
});


/* =========================
   CONTACT FORM DEMO
========================= */
const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", e => {
    e.preventDefault();
    alert("Message sent! (Demo)");
    contactForm.reset();
  });
}