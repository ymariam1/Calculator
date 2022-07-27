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

function appendNumber(number) {
  display.textContent += number;
}
function setOperation(newOperation) {
  currentOperation = newOperation;
}

clearBtn.addEventListener("click", clear);

function clear() {
  display.textContent = "0";
  sdisplay.textContent = " ";
}
function appendNumber(string) {
  if ((display.textContent = "0")) {
    display.textContent = string;
  } else {
    display.textContent += string;
  }
}
