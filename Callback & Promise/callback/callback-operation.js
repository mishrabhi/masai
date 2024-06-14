//In this assignment, you are tasked with creating a JavaScript function named "calculate" that takes two numbers as arguments and performs arithmetic operations on them using a callback function named "operation". The operation function, defined inside calculate, accepts three arguments: num1, num2, and callback. The callback function performs arithmetic operations on num1 and num2 and returns the result. The calculate function then calls the operation function twice, once with addition and once with multiplication as the callback functions, and displays the results using console.log().

function calculate(num1, num2) {
  function operation(num1, num2, callback) {
    return callback(num1, num2);
  }

  function add(num1, num2) {
    return num1 + num2;
  }

  function multiply(num1, num2) {
    return num1 * num2;
  }

  const additionResult = operation(num1, num2, add);
  console.log(additionResult);

  const multiplicationResult = operation(num1, num2, multiply);
  console.log(multiplicationResult);
}

calculate(3, 4);
