// WAP to calculate CALC  Using Add, Sub, Mul, Div function

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

var num1 = parseFloat(prompt("Enter the first number:"));
var num2 = parseFloat(prompt("Enter the second number:"));
var calculate = prompt("Enter the operator (+, -, *, /):");

var result;

switch (calculate) {

  case "+":

    result = add(num1, num2);
    break;

  case "-":

    result = subtract(num1, num2);
    break;

  case "*":

    result = multiply(num1, num2);
    break;

  case "/":

    result = divide(num1, num2);
    break;

  default:

    result = "Invalid operation";

}

console.log("Result : " + result);