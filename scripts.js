// const scroll = new LocomotiveScroll({
//   el: document.querySelector("#main"),
//   smooth: true,
//   multiplier: 0.2,
//   getSpeed: true,
// });

const mainCom = document.querySelector(".text-accordion-wrapper");
const showImgContainer = document.getElementById("imgContainer");

const allElem = document.querySelectorAll(".elem");

mainCom.addEventListener("mouseenter", function () {
  showImgContainer.style.display = "block";
});

mainCom.addEventListener("mouseleave", function () {
  showImgContainer.style.display = "none";
});

allElem.forEach(function (e) {
  e.addEventListener("mouseenter", function () {
    var imgFetch = e.getAttribute("data-img");

    showImgContainer.style.backgroundImage = `url(${imgFetch})`;
  });
});

// tab menus
const updateImage = document.getElementById("img-data");
const selectedTitle = document.querySelectorAll(".title-container h6");
const updatePara = document.getElementById("currentPara");

function designBtn() {
  document.getElementById("design").classList.add("active");
  document.getElementById("project").classList.remove("active");
  document.getElementById("execution").classList.remove("active");

  updateImage.style.opacity = 0;
  updatePara.style.opacity = 0;

  setTimeout(function () {
    updateImage.src =
      "https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15e1_Project-p-800.jpg";

    updatePara.innerHTML = `Our team works with our clients to refine an idea and concept
    into an executable design. We create a final design that
    encompasses the brand narrative to bring stories to life and
    provide end-to-end design solutions from concept, design, and
    architectural drawings to 3D renderings.`;

    updateImage.style.opacity = 1;
    updatePara.style.opacity = 1;
  }, 300);
}

function projectBtn() {
  document.getElementById("design").classList.remove("active");
  document.getElementById("project").classList.add("active");
  document.getElementById("execution").classList.remove("active");

  updateImage.style.opacity = 0;
  updatePara.style.opacity = 0;

  setTimeout(function () {
    updateImage.src =
      "https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15d0_Project.webp";
    updatePara.innerHTML = `Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need.`;
    updateImage.style.opacity = 1;
    updatePara.style.opacity = 1;
  }, 300);
}

function executionBtn() {
  document.getElementById("design").classList.remove("active");
  document.getElementById("project").classList.remove("active");
  document.getElementById("execution").classList.add("active");

  updateImage.style.opacity = 0;
  updatePara.style.opacity = 0;

  setTimeout(function (params) {
    updateImage.src =
      "https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15cd_Execution-p-800.jpg";
    updatePara.innerHTML = `We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience.`;
    updateImage.style.opacity = 1;
    updatePara.style.opacity = 1;
  }, 300);
}

// swiper js is here

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});

// vidoe play when in frame

const videoPlay = document.querySelector("video");

videoPlay.addEventListener("mouseenter", function () {
  videoPlay.play();
});

videoPlay.addEventListener("mouseleave", function () {
  videoPlay.pause();
});
