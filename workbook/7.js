// Step 1: Define an array
const numbers = [1, 2, 3, 4, 5, 6];

// Step 2: Create a filter function
function filterArray(arr, callback) {
  // Step 3: Use .filter()
  return arr.filter(callback);
}

// Step 5: Call with different conditions
console.log(filterArray(numbers, n => n % 2 === 0)); // Even numbers
console.log(filterArray(numbers, n => n > 3));       // Numbers greater than 3
