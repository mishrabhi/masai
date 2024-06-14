//In this assignment, you are tasked with creating a JavaScript function named filterArray that filters elements from an array based on a callback function. The filterArray function takes two arguments: arr (an array) and callback (a callback function). Inside the filterArray function, each element of the arr array is iterated over, and the callback function is called on each element. The callback function checks if the current element is even or odd and returns true for even elements and false for odd elements. The filterArray function then uses the returned values from the callback function to create a new array of filtered elements and returns it. Finally, the original array and the filtered array are displayed using console.log().

let numbers = [1, 4, 7, 8, 10, 13, 15, 18, 21, 24];

function filterArray(arr, callback) {
  function callback(ele) {
    return ele % 2 === 0;
  }

  let filteredArray = arr.filter(callback);
  return filteredArray;
}

let filteredNumbers = filterArray(numbers);

console.log("original array:", numbers);
console.log("Filtered Array:", filteredNumbers);
