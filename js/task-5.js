function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector("button");
const body = document.querySelector("body");

btn.addEventListener("click", function () {
  const randomColor = getRandomHexColor();
  body.style.background = randomColor;
});
