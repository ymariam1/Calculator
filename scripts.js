const display = document.getElementById("bdisplay");
const sdisplay = document.getElementById("sdisplay");
const clearBtn = document.getElementById("clear");
const deleteBtn = document.getElementById("delete");
const numberButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll("[data-operator]");
const pointBtn = document.getElementById(".");
const equalsBtn = document.getElementById("=");
window.addEventListener("keydown", listenForKey);

var num1 = "";
var num2 = "";
var currentOperation = null;
let shouldResetScreen = false;
function resetDisplay() {
  display.textContent = "";
}
numberButtons.forEach((button) =>
  button.addEventListener("click", () => appendNumber(button.textContent))
);

pointBtn.addEventListener("click", point);

operatorButtons.forEach((button) =>
  button.addEventListener("click", () => setOperation(button.textContent))
);

function setOperation(operator) {
  if (currentOperation !== null) evaluate();
  num1 = display.textContent;
  currentOperation = operator;
  sdisplay.textContent = `${num1} ${currentOperation}`;
  shouldResetScreen = true;
}
function evaluate() {
  if (currentOperation === null) return;
  if (currentOperation === "÷" && display.textContent === "0") {
    alert("Nice try");
    return;
  }
  num2 = display.textContent;
  display.textContent = roundResult(operate(currentOperation, num1, num2));
  sdisplay.textContent = `${num1} ${currentOperation} ${num2} =`;
  currentOperation = null;
}

function roundResult(number) {
  return Math.round(number * 1000) / 1000;
}

clearBtn.addEventListener("click", clear);
deleteBtn.addEventListener("click", deletes);

function clear() {
  display.textContent = "0";
  sdisplay.textContent = " ";
  num1 = "";
  num2 = "";
}

function resetScreen() {
  display.textContent = "";
  shouldResetScreen = false;
}

function appendNumber(number) {
  if (display.textContent === "0" || shouldResetScreen) resetScreen();
  display.textContent += number;
}
function deletes() {
  display.textContent = display.textContent.toString().slice(0, -1);
}
function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}

function operate(operator, a, b) {
  a = Number(a);
  b = Number(b);
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return substract(a, b);
    case "x":
      return multiply(a, b);
    case "÷":
      if (b === 0) return null;
      else return divide(a, b);
    default:
      return null;
  }
}

function point() {
  if (display.textContent.includes(".")) {
    return;
  }
  if (display.textContent === "") {
    display.textContent = "0";
  }
  display.textContent += ".";
}
function listenForKey(e) {
  if (e.key >= 0 || e.key <= 9) appendNumber(e.key);
  if (e.ley === ".") point();
  if (e.key === "=" || e.key === "Enter") evaluate();
  if (e.key === "Backspace") deletes();
  if (e.key === "Escape") clear();
  if (e.key === "*" || e.key === "+" || e.key === "/" || e.key === "-")
    setOperation(convert(e.key));
}
function convert(keyboardOperator) {
  if (keyboardOperator === "/") return "÷";
  if (keyboardOperator === "*") return "x";
  if (keyboardOperator === "-") return "-";
  if (keyboardOperator === "+") return "+";
}
