function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const box = document.getElementById("boxes");

function createBoxes() {
  const input = document.querySelector("input").value;
  const amount = parseInt(input);
  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.classList.add("new__box");
    box.append(div);

    div.style.width = `${30 + i * 10}px`;
    div.style.height = `${30 + i * 10}px`;
    div.style.background = getRandomHexColor();
  }
}

function destroyBoxes() {
  const boxes = box.querySelectorAll(".new__box");
  boxes.forEach((box) => box.remove());
}

const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");

btnCreate.addEventListener("click", function () {
  createBoxes();
});
btnDestroy.addEventListener("click", function () {
  destroyBoxes();
});
