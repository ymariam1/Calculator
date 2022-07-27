const display = document.getElementById("bdisplay");
const sdisplay = document.getElementById("sdisplay");
const clearBtn = document.getElementById("clear");
const deleteBtn = document.getElementById("delete");
const numberButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll("[data-operator]");
const pointBtn = document.getElementById(".");
const equalsBtn = document.getElementById("=");

var num1 = 0;
var num2 = 0;
var currentOperation = "";

numberButtons.forEach((button) =>
  button.addEventListener("click", () => appendNumber(button.textContent))
);

operatorButtons.forEach((button) =>
  button.addEventListener("click", () => setOperation(button.textContent))
);

function setOperation(newOperation) {
  currentOperation = newOperation;
}

clearBtn.addEventListener("click", clear);
deleteBtn.addEventListener("click", deletes);

function clear() {
  display.textContent = "0";
  sdisplay.textContent = " ";
}
function appendNumber(number) {
  if (display.textContent === "0") {
    display.textContent = number;
  } else {
    display.textContent += number;
  }
}
function deletes() {
  display.textContent = display.textContent.toString().slice(0, -1);
}
