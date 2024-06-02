const numbers = [1, 2, 3, 4, 5];
function calculateSum(array) {
  let total = 0;
  array.forEach(function (number) {
    total += number;
  });
  return total;
}
console.log(calculateSum(numbers));
