// Arithmetic functions
function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number2 !== 0 ? number1 / number2 : "Error: Division by zero";
}

// DOMContentLoaded to ensure DOM is ready
document.addEventListener("DOMContentLoaded", function () {
  const resultSpan = document.getElementById("calculation-result");

  // Helper function to get numbers safely
  function getNumbers() {
    const num1Input = document.getElementById("number1").value;
    const num2Input = document.getElementById("number2").value;

    const number1 = num1Input === "" ? 0 : parseFloat(num1Input);
    const number2 = num2Input === "" ? 0 : parseFloat(num2Input);

    return { number1, number2 };
  }

  // Add button
  document.getElementById("add").addEventListener("click", function () {
    const { number1, number2 } = getNumbers();
    resultSpan.textContent = add(number1, number2);
  });

  // Subtract button
  document.getElementById("subtract").addEventListener("click", function () {
    const { number1, number2 } = getNumbers();
    resultSpan.textContent = subtract(number1, number2);
  });

  // Multiply button
  document.getElementById("multiply").addEventListener("click", function () {
    const { number1, number2 } = getNumbers();
    resultSpan.textContent = multiply(number1, number2);
  });

  // Divide button
  document.getElementById("divide").addEventListener("click", function () {
    const { number1, number2 } = getNumbers();
    resultSpan.textContent = divide(number1, number2);
  });
});