const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
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
  const mediaQuery = window.matchMedia("(max-width: 900px)");

  
  if (mediaQuery.matches) {
  } else {
    timeln.fromTo(col_left, { y: 0 }, { y: '30vh', duration: 2, ease: 'yes' }, 0);
  }  
  ScrollTrigger.config({ 
    limitCallbacks: true,
    ignoreMobileResize: true
  });
  
  const scroll_1 = ScrollTrigger.create({
    animation: timeln,
    trigger: section_1,
    start: 'top top',
    end: 'bottom center',
    scrub: true
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
        end: "+=" + section_2.offsetWidth
      }
    });
  }