function wavesAnimeRight(className, delayValue) {
  const position = gsap.utils.random(0, 90);
  const bgColor = Math.floor(Math.random() * 16777215).toString(16);

  gsap.fromTo(
    className,
    {
      top: "100%",
      left: `${position}%`,
      // this is an random number maker
      background: `linear-gradient(to bottom, #${bgColor} 65%, #000000)`,
    },
    {
      top: "-50%",
      duration: 0.55,
      delay: delayValue,
      opacity: 0.7,
      onComplete: () => {
        wavesAnimeRight(className, 0);
      },
    }
  );
}

function wavesAnimeLeft(className, delayValue) {
  const position = gsap.utils.random(0, 90);
  const bgColor = Math.floor(Math.random() * 16777215).toString(16);

  gsap.fromTo(
    className,
    {
      top: "100%",
      left: `${position}%`,
      // this is an random number maker
      background: `linear-gradient(to bottom, #${bgColor} 65%, #000000)`,
    },
    {
      top: "-50%",
      duration: 0.55,
      delay: delayValue,
      onComplete: () => {
        wavesAnimeRight(className, 0);
      },
    }
  );
}

wavesAnimeRight(".rightColorWaves1", 0);
wavesAnimeRight(".rightColorWaves2", 0.15);
wavesAnimeRight(".rightColorWaves3", 0.3);

wavesAnimeLeft(".leftColorWaves1", 0);
wavesAnimeLeft(".leftColorWaves2", 0.15);
wavesAnimeLeft(".leftColorWaves3", 0.3);

// default rotation animation
let roundClockwize, counterClockwise;
function startDefaultRotation() {
  roundClockwize = gsap.to(".iconContainer", {
    rotate: 360,
    repeat: -1,
    duration: 250,
    ease: "linear",
  });

  counterClockwise = gsap.to(".icons, .searchIcon", {
    rotate: -360,
    repeat: -1,
    duration: 250,
    ease: "linear",
  });
}
startDefaultRotation();
// search icon animation
const searchInput = document.querySelector(".searchInput");
const searchIcon = document.querySelector(".searchIcon");
const exitIcon = document.querySelector(".exitIcon");
const searchAnime = gsap.timeline({
  paused: true,
  onComplete: () => {
    searchIcon.removeEventListener("click", restartSearchAnime);
    searchIcon.addEventListener("click", searchInBrowser);
  },
  onReverseComplete: () => {
    searchIcon.removeEventListener("click", searchInBrowser);
    searchIcon.addEventListener("click", restartSearchAnime);
    startDefaultRotation()
  },
});

searchAnime
  .fromTo(
    ".icons",
    { scale: 1, opacity: 1 },
    {
      scale: 0.6,
      opacity: 0,
      stagger: 0.05,
      duration: 0.1,
    }
  )
  .set(".iconContainer, .icons, .searchIcon", { rotate: 0 })
  .set(".icons", {
    display: "none",
  })
  .set(".handBgImage", {
    delay: 0.2,
    backgroundSize: "0% 0%",
  })
  .fromTo(
    ".searchIcon",
    { top: "44%", left: "42%" },
    {
      left: 0,
      duration: 1,
      fontSize: "25px",
      top: "48%",
      delay: 0.5,
    }
  )
  .set(".exitIcon", {
    display: "block",
  })
  .set(".searchIcon", {
    top: 0,
    left: 0,
  })
  .set(".searchInput, .searchIcon", {
    position: "relative",
  })
  .fromTo(
    ".searchInput",
    { scaleX: 0 },
    {
      scaleX: 1,
      duration: 1,
      ease: "linear",
      delay: 0.6,
    }
  )
  .fromTo(
    ".exitIcon",
    { opacity: 0 },
    {
      opacity: 1,
      duration: 0.5,
      linear: "ease",
    }
  );

function restartSearchAnime() {
  roundClockwize.kill();
  counterClockwise.kill();
  searchAnime.restart();
}

function reverseSearchAnime() {
  searchAnime.reverse();
  searchInput.value = "";
}

searchIcon.addEventListener("click", restartSearchAnime);

exitIcon.addEventListener("click", reverseSearchAnime);

function searchInBrowser() {
  const inputValue = searchInput.value;
  const splitedValue = inputValue.split(" ");
  const joinedValue = splitedValue.join("+");
  window.open(`https://www.google.com/search?q=${joinedValue}`);
  searchInput.value = "";
}

searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    searchInBrowser();
  }
});

// the structure of project

// window.open("https://www.google.com/search?q=hello+there");
// window.location.replace('https://www.google.com/search?q=hello+there')
