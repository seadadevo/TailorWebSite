let menuIcon = document.querySelector(".menuIcon");
let menuList = document.querySelector(".menuList");
let nestedMenuDown = document.querySelector(".nestedMenuDown");
let lisMenuHeader = document.querySelectorAll(".menuList > li");

menuIcon.addEventListener("click", () => {
  menuList.classList.toggle("active");
  nestedMenuDown.classList.remove("active");
});

lisMenuHeader[3].addEventListener("click", () => {
  nestedMenuDown.classList.toggle("active");
});

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.classList.add("hidden");
  }, 500);
});

// ! Slider
let currentSlider = 0;

const numsBtns = document.querySelectorAll(".slider .nums span");
const slidesWrapper = document.querySelector(".slider .slides-wrapper");
const numsRight = document.querySelector(".slider .fa-arrow-right");
const numLeft = document.querySelector(".slider .fa-arrow-left");

function updateSlider(index) {
  currentSlider = index;
  slidesWrapper.style.transform = `translateX(-${index * 100}%)`;

  numsBtns.forEach((btn, i) => {
    btn.classList.toggle("active", i === index);
  });
}

numsBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => updateSlider(index));
});

numsRight.addEventListener("click", () => {
  if (currentSlider < slidesWrapper.children.length - 1) {
    updateSlider(currentSlider + 1);
  }
});

numLeft.addEventListener("click", () => {
  if (currentSlider > 0) {
    updateSlider(currentSlider - 1);
  }
});

updateSlider(0);

const landingBox = document.querySelector(".landing .box");
const servicesBoxs = document.querySelectorAll(".services .box");
const serviceTwoBoxs = document.querySelectorAll(".service2 .box");

window.addEventListener("scroll", () => {
  const windowHeight = window.innerHeight;

  const boxLandingTop = landingBox.getBoundingClientRect().top;
  if (boxLandingTop < windowHeight - 100) {
    landingBox.classList.add("visible");
  }

  servicesBoxs.forEach((box, i) => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < windowHeight - 100) {
      setTimeout(() => {
        box.classList.add("visible");
      }, i * 150);
    }
  });

  serviceTwoBoxs.forEach((box, i) => {
    const boxTop1 = box.getBoundingClientRect().top;
    if (boxTop1 < windowHeight - 100) {
      setTimeout(() => {
        box.classList.add("visible");
      }, i * 150);
    }
  });
});
