const input = document.getElementById("name-input");
const span = document.getElementById("name-output");

const text = span.textContent;

function changeText() {
  if (input.value.trim() === "") {
    span.textContent = text;
  } else {
    span.textContent = input.value;
  }
}
input.addEventListener("input", changeText);

// input.addEventListener("input", function () {
//   span.textContent = input.value;
// });
