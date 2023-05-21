// const btnId = document.getElementById("btnId");
// btnId.addEventListener("click", () => {
//     console.log("you clicked")
//   window.open("https://www.google.com/search?q=hello+there");
// // window.location.replace('https://www.google.com/search?q=hello+there')

// });

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
      opacity: .7,
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

// search icon animation
const searchIcon = document.querySelector('.searchIcon');
searchIcon.addEventListener("click", () => {
  const searchAnime = gsap.timeline();
  
});