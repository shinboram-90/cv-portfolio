const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
  });
});

var position = 0;
var msg = "FULL STACK WEB DEVELOPER JUNIOR";
var msg = "      " + msg;
var longue = msg.length;
var fois = 150 / msg.length + 1;

for (i = 0; i <= fois; i++) msg += msg;

function textdefil() {
  document.form1.deftext.value = msg.substring(position, position + 150);
  position++;
  if (position == longue) position = 0;
  setTimeout("textdefil()", 100);
}

window.onload = textdefil;

window.addEventListener("DOMContentLoaded", (event) => {
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 90,
        density: { enable: true, value_area: 2446.3625154130705 },
      },
      color: { value: "#fe6585" },
      shape: {
        type: "circle",
        stroke: { width: 1, color: "#842c4b" },
        // polygon: { nb_sides: 5 },
        // image: { src: "img/github.svg", width: 100, height: 100 }
      },
      opacity: {
        value: 0.5,
        random: true,
        anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
      },
      size: {
        value: 64.1362896154328,
        random: true,
        anim: {
          enable: false,
          speed: 19.489912447658924,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: false,
        // distance: 150,
        // color: "#ffffff",
        // opacity: 0.4,
        // width: 1
      },
      move: {
        enable: true,
        speed: 6,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 },
      },
    },
    interactivity: {
      detect_on: "window",
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" },
        resize: true,
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 1 } },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 0.8,
          speed: 3,
        },
        repulse: { distance: 129.9327496510595, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 },
      },
    },
    retina_detect: true,
  });
});

var TxtRotate = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(() => {
    that.tick();
  }, delta);
};

window.addEventListener("load", () => {
  var elements = document.getElementsByClassName("txt-rotate");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-rotate");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
});

// window.addEventListener("load", function(evt) {
//   alert("hello");
// });

const btn = document.querySelector("#button");
window.addEventListener("scroll", () => {
  if (window.scrollTop > 300) {
    btn.classList.add("show");
  } else {
    btn.classList.remove("show");
  }
});

// btn.addEventListener("click", (e) => {
//   e.preventDefault();
//   html.animate({ scrollTop: 0 }, "300");
// });

document.addEventListener("scroll", handleScroll);
// get a reference to our predefined button
var scrollToTopBtn = document.querySelector("#button");

function handleScroll() {
  var scrollableHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var GOLDEN_RATIO = 0.1;

  if (document.documentElement.scrollTop / scrollableHeight > GOLDEN_RATIO) {
    //show button
    scrollToTopBtn.style.display = "block";
  } else {
    //hide button
    scrollToTopBtn.style.display = "none";
  }
}

btn.addEventListener("click", scrollToTop);

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
