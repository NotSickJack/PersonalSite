var $circle = $(".cursor"),
  $follow = $(".cursor-follower");

function moveCircle(e) {
  TweenLite.to($circle, 0.3, {
    x: e.clientX,
    y: e.clientY,
  });
  TweenLite.to($follow, 0.7, {
    x: e.clientX,
    y: e.clientY,
  });
}

function hoverFunc(e) {
  TweenLite.to($circle, 0.3, {
    scale: 0,
  });
  TweenLite.to($follow, 0.3, {
    scale: 2,
  });
}

function unhoverFunc(e) {
  TweenLite.to($circle, 0.3, {
    scale: 1,
  });
  TweenLite.to($follow, 0.3, {
    scale: 1,
  });
}

$(window).on("mousemove", moveCircle);

$("a").hover(hoverFunc, unhoverFunc);
