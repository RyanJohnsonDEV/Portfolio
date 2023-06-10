'use strict';

// TODO
// footer

const sections = document.querySelectorAll('.section');
const imgContainer = document.querySelector('.image-container');
// const img_box = document.querySelector(".img-box");
// const bioContainer = document.querySelector(".bio");
const bio_box = document.querySelector('.bio-box');
const navbar = document.querySelector('.nav');
const dark = document.querySelector('.fa-moon');
const light = document.querySelector('.fa-sun');
const modeToggle = document.querySelector('.toggle');
const navLinks = document.querySelector('.links-container');
const collapseNav = document.querySelector('.hamburger-menu');
const dropdown = document.querySelector('.dropdown-container');
const nav = document.querySelector('.nav');
const successMsg = document.getElementById('success');
const nameBox = document.getElementById('emailName');
const emailBox = document.getElementById('emailAddress');
const bodyBox = document.getElementById('emailBody');
const notiText = document.getElementById('notiText');
const subject = document.getElementById('subjectline');
const r = document.querySelector(':root');
const imgLeftScroll = document.querySelector('.img-leftScroll');
const imgRightScroll = document.querySelector('.img-rightScroll');
const bioImg = document.getElementById('bio-img');

r.style.setProperty('--offmain-color', '#111111');

function checkWindow() {
  if (window.innerWidth < 750) {
    navLinks.classList.add('hidden');
    collapseNav.classList.add('visible');
    nav.style.height = '100px';
  } else {
    navLinks.classList.remove('hidden');
    collapseNav.classList.remove('visible');
    nav.style.height = 'fit content';
    dropdown.classList.remove('dropdown');
  }
}

function removeDropdown() {
  dropdown.classList.remove('dropdown');
}

function checkSection() {
  if (window.pageYOffset !== 0) {
    navbar.style.backgroundColor = r.style.getPropertyValue('--offmain-color');
  } else {
    navbar.style.backgroundColor = r.style.getPropertyValue('--main-color');
  }

  dropdown.classList.remove('dropdown');

  const triggerBottom = (window.innerHeight / 5) * 3.75;

  sections.forEach((section) => {
    const partTop = section.getBoundingClientRect().top;
    const extLine = section.getElementsByClassName('extLine');
    if (partTop < triggerBottom) {
      section.classList.add('show');
      extLine[0].classList.add('showing');
      extLine[1].classList.add('showing');
    } else if (partTop > triggerBottom + 300) {
      section.classList.remove('show');
      extLine[0].classList.remove('showing');
      extLine[1].classList.remove('showing');
    }
  });

  // img_box.style.height = Number(imgContainer.clientHeight - 22) + "px";
  // img_box.style.width = imgContainer.clientWidth + "px";

  // bio_box.style.height = Number(imgContainer.clientHeight - 22) + "px";
  // bio_box.style.width = Number(bioContainer.clientWidth + 1) + "px";
}

window.addEventListener('resize', function () {
  checkWindow();
});

function show() {
  if (nameBox.value === '' || emailBox.value === '' || bodyBox.value === '') {
    notiText.textContent = 'Please fill out all fields';
    successMsg.style.backgroundColor = '#f75e5e';
    successMsg.style.opacity = '100%';
    setTimeout(function () {
      successMsg.style.opacity = '0';
    }, 5000);
  }
}

const handleSubmit = (event) => {
  event.preventDefault();
  console.log('Form submission start');
  subject.value = `PORTFOLIO // Form Submission From ${nameBox.value}`;
  const myForm = event.target;
  const formData = new FormData(myForm);
  if (nameBox.value !== '' && emailBox.value !== '' && bodyBox.value !== '') {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        notiText.textContent = `Submission Successful`;
        successMsg.style.backgroundColor = '#5aa361';
        successMsg.style.opacity = '100%';
        nameBox.value = '';
        emailBox.value = '';
        bodyBox.value = '';
      })
      .catch((error) => {
        notiText.textContent = error;
        successMsg.style.backgroundColor = '#f75e5e';
        successMsg.style.opacity = '100%';
      });
  }
  setTimeout(function () {
    successMsg.style.opacity = '0';
  }, 5000);
};

document
  .getElementById('contact_form')
  .addEventListener('submit', handleSubmit);

collapseNav.addEventListener('mousedown', function () {
  dropdown.classList.toggle('dropdown');
  console.log('hey');
});

modeToggle.addEventListener('change', function () {
  navbar.classList.add('notransition');
  if (this.checked) {
    dark.style.opacity = '0%';
    light.style.opacity = '100%';

    r.style.setProperty('--main-color', 'white');
    r.style.setProperty('--second-color', 'gray');
    r.style.setProperty('--third-color', '#42C2FF');
    r.style.setProperty('--fourth-color', '#0AA1DD');
    r.style.setProperty('--fifth-color', '#2155CD');
    r.style.setProperty('--text-color', 'black');
    r.style.setProperty('--offmain-color', 'lightgray');
    r.style.setProperty('--shadow-color', '#444444');

    checkSection();
  } else {
    dark.style.opacity = '100%';
    light.style.opacity = '0%';
    navbar.classList.add('notransition');
    r.style.setProperty('--main-color', '#191a19');
    r.style.setProperty('--second-color', '#150050');
    r.style.setProperty('--third-color', '#3f0071');
    r.style.setProperty('--fourth-color', '#610094');
    r.style.setProperty('--fifth-color', '#9f03f3');
    r.style.setProperty('--text-color', '#b1b1b1');
    r.style.setProperty('--offmain-color', '#111111');
    r.style.setProperty('--shadow-color', 'black');
    checkSection();
  }
  navbar.classList.remove('notransition');
});

checkSection();
checkWindow();

window.addEventListener('scroll', checkSection);

let imgNum = 1;
imgLeftScroll.addEventListener('click', function () {
  imgNum === 1 ? (imgNum = 5) : imgNum--;
  bioImg.src = `images/self${imgNum}.jpg`;
});

imgRightScroll.addEventListener('click', function () {
  imgNum === 5 ? (imgNum = 1) : imgNum++;
  bioImg.src = `images/self${imgNum}.jpg`;
});

// img_box.style.height = Number(imgContainer.clientHeight - 22) + 'px';
// img_box.style.width = imgContainer.clientWidth + 'px';

// bio_box.style.height = Number(imgContainer.clientHeight - 22) + 'px';
// bio_box.style.width = Number(bioContainer.clientWidth + 1) + 'px';
