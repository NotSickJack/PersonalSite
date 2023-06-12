document.onmousemove = function(e) {
    document.body.style.setProperty("--x", e.clientX + "px");
    document.body.style.setProperty("--y", e.clientY + "px");
  };
  
  // hover effect
  const clickableElements = document.querySelectorAll(".clickable");
  clickableElements.forEach(elm => {
    elm.addEventListener("mouseover", function() {
      document.body.classList.add("img-hovered");
    });
    elm.addEventListener("mouseleave", function() {
      document.body.classList.remove("img-hovered");
    });
  });
  
  //click effect

var canvas = document.querySelector('.arrows');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var mx, my;

document.addEventListener("mousemove", function(e) {
    mx = e.clientX;
    my = e.clientY;
}, false);

window.onresize = function() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function Point(x, y) {
  this.x = x || 0;
  this.y = y || 0;
}

function Arrow(position) {
  this.pos = position;
  this.dx = 0;
  this.dy = 0;
  this.angle = 0;
  this.dist = 0;
  
  this.update = function() {
    this.dx = mx - this.pos.x;
    this.dy = my - this.pos.y;
    this.dist = Math.sqrt(Math.pow(this.dx, 2) + Math.pow(this.dy, 2));
    this.angle = Math.atan2(this.dy, this.dx);
  }
  
  this.draw = function() {
    ctx.save();
    ctx.translate(this.pos.x, this.pos.y);
    ctx.rotate(this.angle);
    ctx.beginPath();
    
    ctx.moveTo(30, 0);
    ctx.lineTo(-30, 0);
    ctx.moveTo(30, 0);
    ctx.lineTo(5, -30);
    ctx.moveTo(30, 0);
    ctx.lineTo(5, 30);
    ctx.lineWidth = 2;
    var alpha = 1-(this.dist/175);
    ctx.strokeStyle = "rgba(255, 255, 255, "+ Math.max(0, alpha) +")";
    ctx.stroke();
    
    ctx.restore();
  }
}


var arrowArr = [];

window.onload = function() {
  for (var y = 0; y < canvas.height / 20; y++) {
    for (var x = 0; x < canvas.width / 50; x++) {
  		var arr = new Arrow(new Point(x * 100, y * 100));
       arrowArr.push(arr);
    }
  }
  requestAnimationFrame(main);
}

function main() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  for (var y = 0; y < canvas.height / 20; y++) {
    for (var x = 0; x < canvas.width / 50; x++) {
      arrowArr[y * 10 + x].update();
      arrowArr[y * 10 + x].draw();
    }
  }
  requestAnimationFrame(main);
}
