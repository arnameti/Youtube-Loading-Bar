const loadingBarItemEL = document.querySelector(".loading-bar__item");

let width = 0;
let loadingBar = setInterval(() => {
  if (width === 100) {
    clearInterval(loadingBar);
  } else {
    width++;
    loadingBarItemEL.style.width = width + "%";
  }
}, 10);
