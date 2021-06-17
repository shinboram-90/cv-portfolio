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
      bubble: { distance: 400, size: 40, duration: 2, opacity: 0.8, speed: 3 },
      repulse: { distance: 129.9327496510595, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
});
