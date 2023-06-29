var tl = gsap.timeline();

const welcomeScreen = gsap.timeline({
  paused: "true",
});
const fromLeft = document.querySelector("transition-container");

tl.from("#loader", {
  duration: 0.3,
  opacity: 0,
  y: 10,
});

let tl1 = gsap.timeline({ ease: "power4.inOut", paused: "true" });

tl1.set(fromLeft, { pointerEvents: "none" });
tl1.to(".from-left .tile", {
  duration: 0.6,
  width: "100%",
  left: "0%",

});
tl1.to(".from-left .tile", {
  duration: 0.5,
  width: "100%",
  left: "100%",
  stagger: 0.1,
});
tl1.set(".from-left .tile", { left: "0", width: "0" });
tl1.set(fromLeft, { pointerEvents: "all" });

let id,
  i = 0;
function loader() {
  id = setInterval(frame, 20);
}
function frame() {
  if (i >= 100) {
    clearInterval(id);
    tl1.play();
    welcomeScreen.play();
  } else {
    i++;
    document.getElementById("loader").innerHTML = i + "%";
  }
}
window.onload = function () {
  loader();
};

welcomeScreen.to(".loading-screen", {
  duration: 2,
  y: -2000,
  ease: "Power4.out",
  delay: 0.4,
});


const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});

function raf(time) {
  lenis.raf(time);
  ScrollTrigger.update();
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

const section_1 = document.getElementById("vertical");
const col_left = document.querySelector(".col_left");
const timeln = gsap.timeline({ paused: true });
const mediaQuery = window.matchMedia("(max-width: 1200px)");

if (mediaQuery.matches) {
} else {
  timeln.fromTo(col_left, { y: 0 }, { y: "30vh", duration: 2, ease: "yes" }, 0);
}
ScrollTrigger.config({
  limitCallbacks: true,
  ignoreMobileResize: true,
});

const scroll_1 = ScrollTrigger.create({
  animation: timeln,
  trigger: section_1,
  start: "top top",
  end: "bottom center",
  scrub: true,
});

const section_2 = document.getElementById("horizontal");
let box_items = gsap.utils.toArray(".horizontal__item");

if (mediaQuery.matches) {
  section_2.style.overflowX = "auto";
} else {
  gsap.to(box_items, {
    xPercent: -100 * (box_items.length - 1),
    ease: "sine.out",
    scrollTrigger: {
      trigger: section_2,
      pin: true,
      scrub: 1,
      end: "+=" + section_2.offsetWidth,
    },
  });
}
