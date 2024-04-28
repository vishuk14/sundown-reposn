// gsap is here

// navbar
gsap.fromTo(
  "#nav-con",
  { opacity: 0, y: -100 },
  { duration: 1, opacity: 1, y: 0 }
);

// herosection
// gsap.fromTo(
//   ".main-heading",
//   {
//     opacity: 0,
//     y: 1000,
//   },
//   { duration: 1, y: 0, opacity: 1 }
// );

gsap.fromTo(
  ["#spaceText", "#ThatText", "#inspireText, .main-para"],
  { opacity: 1, y: 200 },
  { duration: 1, opacity: 1, y: 0, delay: 1 }
);

gsap.fromTo(
  ".video",
  { opacity: 0.2 },
  {
    opacity: 1,
    duration: 1,

    scrollTrigger: {
      trigger: ".video",
      markers: false,
      scrub: true,
      start: "top center",
      end: "bottom center",
      toggleActions: "restart pause restart pause",
      ease: "power2.inOut",
    },
  }
);

gsap.fromTo(
  "#leftSection-content",
  { opacity: 0.6, x: -200 },
  {
    opacity: 1,
    x: 0,
    duration: 2,
    scrollTrigger: {
      trigger: "#leftSection-content",
      markers: true,
      scrub: true,
      ease: "power2.inOut",
      toggleActions: "restart pause restart pause",
      start: "start 400px",
      end: "start 250px",
    },
  }
);

gsap.fromTo(
  "#rightsection",
  { opacity: 0.6, x: 200 },
  {
    opacity: 1,
    x: 0,
    duration: 2,
    scrollTrigger: {
      trigger: "#rightsection",
      markers: true,
      scrub: true,
      ease: "power2.inOut",
      toggleActions: "restart pause restart pause",
      start: "start 400px",
      end: "start 250px",
    },
  }
);
