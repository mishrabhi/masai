function rearrangeArray(numbers) {
  const removedElements = numbers.splice(0, 3);
  numbers.push(...removedElements);
  return numbers;
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(rearrangeArray(numbers));
