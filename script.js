"use strict";

// TODO
// Animation pink bars extending from titles
// finish projects
// contact form
// footer
// collapse nav

const sections = document.querySelectorAll(".section");
const imgContainer = document.querySelector(".image-container");
const img_box = document.querySelector(".img-box");
const bioContainer = document.querySelector(".bio");
const bio_box = document.querySelector(".bio-box");
const navbar = document.querySelector(".nav");
const dark = document.querySelector(".fa-moon");
const light = document.querySelector(".fa-sun");
const modeToggle = document.querySelector(".toggle");
const r = document.querySelector(":root");
// const height = Number(imgContainer.clientHeight - 15);

r.style.setProperty("--offmain-color", "#111111");

function checkSection() {
  if (window.pageYOffset !== 0) {
    navbar.style.backgroundColor = r.style.getPropertyValue("--offmain-color");
  } else {
    navbar.style.backgroundColor = r.style.getPropertyValue("--main-color");
  }

  const triggerBottom = (window.innerHeight / 5) * 3;

  sections.forEach((section) => {
    const partTop = section.getBoundingClientRect().top;
    partTop < triggerBottom
      ? section.classList.add("show")
      : section.classList.remove("show");
  });

  img_box.style.height = Number(imgContainer.clientHeight - 22) + "px";
  img_box.style.width = imgContainer.clientWidth + "px";

  bio_box.style.height = Number(imgContainer.clientHeight - 22) + "px";
  bio_box.style.width = Number(bioContainer.clientWidth + 1) + "px";
}

modeToggle.addEventListener("change", function () {
  navbar.classList.add("notransition");
  if (this.checked) {
    dark.style.opacity = "0%";
    light.style.opacity = "100%";

    r.style.setProperty("--main-color", "white");
    r.style.setProperty("--second-color", "gray");
    r.style.setProperty("--third-color", "#42C2FF");
    r.style.setProperty("--fourth-color", "#0AA1DD");
    r.style.setProperty("--fifth-color", "#2155CD");
    r.style.setProperty("--text-color", "black");
    r.style.setProperty("--offmain-color", "lightgray");
    r.style.setProperty("--shadow-color", "gray");

    checkSection();
  } else {
    dark.style.opacity = "100%";
    light.style.opacity = "0%";
    navbar.classList.add("notransition");
    r.style.setProperty("--main-color", "#191a19");
    r.style.setProperty("--second-color", "#150050");
    r.style.setProperty("--third-color", "#3f0071");
    r.style.setProperty("--fourth-color", "#610094");
    r.style.setProperty("--fifth-color", "#9f03f3");
    r.style.setProperty("--text-color", "#b1b1b1");
    r.style.setProperty("--offmain-color", "#111111");
    r.style.setProperty("--shadow-color", "black");
    checkSection();
  }
  navbar.classList.remove("notransition");
});

checkSection();

window.addEventListener("scroll", checkSection);

img_box.style.height = Number(imgContainer.clientHeight - 22) + "px";
img_box.style.width = imgContainer.clientWidth + "px";

bio_box.style.height = Number(imgContainer.clientHeight - 22) + "px";
bio_box.style.width = Number(bioContainer.clientWidth + 1) + "px";
