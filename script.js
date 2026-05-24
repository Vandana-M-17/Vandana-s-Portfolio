// ==========================
// Cursor Glow Effect
// ==========================

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// ==========================
// Navbar Scroll Effect
// ==========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

  if(window.scrollY > 50){
    header.style.background = "rgba(255,255,255,0.9)";
    header.style.backdropFilter = "blur(10px)";
    header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.08)";
  }

  else{
    header.style.background = "white";
    header.style.boxShadow = "none";
  }

});

// ==========================
// Scroll Reveal Animation
// ==========================

const revealElements = document.querySelectorAll(
  ".section, .skill, .education-card, .project-card-new, .minimal-item, .card"
);

const revealOnScroll = () => {

  const triggerBottom = window.innerHeight * 0.85;

  revealElements.forEach((el) => {

    const boxTop = el.getBoundingClientRect().top;

    if(boxTop < triggerBottom){
      el.classList.add("show");
    }

  });

};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// ==========================
// Typing Effect
// ==========================

const text = "Aspiring Software Developer | MCA Student";

const typingElement = document.querySelector(".hero-text h3");

let index = 0;

function typeEffect(){

  if(index < text.length){

    typingElement.textContent += text.charAt(index);

    index++;

    setTimeout(typeEffect, 80);

  }

}

typingElement.textContent = "";
typeEffect();

// ==========================
// Active Navbar Link
// ==========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach((section) => {

    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.clientHeight;

    if(scrollY >= sectionTop){
      current = section.getAttribute("id");
    }

  });

  navLinks.forEach((link) => {

    link.classList.remove("active");

    if(link.getAttribute("href").includes(current)){
      link.classList.add("active");
    }

  });

});

// ==========================
// Dark Mode Toggle
// ==========================

// Create Button

const darkBtn = document.createElement("button");

darkBtn.innerHTML = "🌙";

darkBtn.classList.add("dark-toggle");

document.body.appendChild(darkBtn);

// Saved Theme

if(localStorage.getItem("theme") === "dark"){
  document.body.classList.add("dark-mode");
  darkBtn.innerHTML = "☀️";
}

// Toggle

darkBtn.addEventListener("click", () => {

  document.body.classList.toggle("dark-mode");

  if(document.body.classList.contains("dark-mode")){

    darkBtn.innerHTML = "☀️";

    localStorage.setItem("theme", "dark");

  }

  else{

    darkBtn.innerHTML = "🌙";

    localStorage.setItem("theme", "light");

  }

});

// ==========================
// Floating Hero Image
// ==========================

const heroImage = document.querySelector(".hero-image img");

window.addEventListener("mousemove", (e) => {

  const x = (window.innerWidth / 2 - e.pageX) / 40;
  const y = (window.innerHeight / 2 - e.pageY) / 40;

  heroImage.style.transform =
    `translate(${x}px, ${y}px)`;

});

// ==========================
// Project Card 3D Tilt
// ==========================

const cards = document.querySelectorAll(".project-card-new");

cards.forEach((card) => {

  card.addEventListener("mousemove", (e) => {

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y / rect.height) - 0.5) * -10;
    const rotateY = ((x / rect.width) - 0.5) * 10;

    card.style.transform =
      `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;

  });

  card.addEventListener("mouseleave", () => {

    card.style.transform =
      "rotateX(0) rotateY(0) scale(1)";

  });

});

// ==========================
// Scroll Progress Bar
// ==========================

const progressBar = document.createElement("div");

progressBar.classList.add("scroll-progress");

document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {

  const scrollTop = document.documentElement.scrollTop;

  const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const progress = (scrollTop / scrollHeight) * 100;

  progressBar.style.width = progress + "%";

});

// ==========================
// Back To Top Button
// ==========================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.classList.add("top-btn");

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

  if(window.scrollY > 400){
    topBtn.classList.add("show-top");
  }

  else{
    topBtn.classList.remove("show-top");
  }

});

topBtn.addEventListener("click", () => {

  window.scrollTo({
    top:0,
    behavior:"smooth"
  });

});

// ==========================
// Smooth Fade for Page Load
// ==========================

window.addEventListener("load", () => {

  document.body.classList.add("loaded");

});

// =========================
// PRELOADER
// =========================

window.addEventListener("load", () => {

  const preloader = document.getElementById("preloader");

  preloader.style.opacity = "0";

  setTimeout(() => {

    preloader.style.display = "none";

  }, 800);

});

