const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};

showMenu("menu-toggle", "nav-menu");

particlesJS("particles-js", {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
  },
  retina_detect: true,
});

const typingAnimation = document.querySelector(".typing-animation");
let index = 0;
let textArray = [
  "I'm Fadhlan Khalifah.",
  "I'm Beginner Developer.",
  "I'm Student In Smkn 4 Tangsel.",
  "Thank You For Visiting! :D",
]; /* add "I'm" to the text array */
let currentText = 0;

function type() {
  const text = textArray[currentText];
  if (index < text.length) {
    typingAnimation.textContent += text[index];
    index++;
    setTimeout(type, 100); /* call the type function every 100ms */
  } else {
    setTimeout(deleteText, 1000); /* wait 1 second before deleting the text */
  }
}

function deleteText() {
  const text = textArray[currentText];
  if (index > 0) {
    typingAnimation.textContent = text.substring(0, index - 1);
    index--;
    setTimeout(deleteText, 50); /* call the deleteText function every 50ms */
  } else {
    currentText =
      (currentText + 1) % textArray.length; /* switch to the next text */
    index = 0;
    setTimeout(type, 700); /* wait 0.5 seconds before typing the next text */
  }
}

type(); /* start the typing animation */
