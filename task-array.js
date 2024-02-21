// EXERCISE:
// You can write all the code natively (for cycles and such) or you can use some advanced functions which JS arrays provides in case you see them fit
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// There can be multiple solutions to each task, solve it as you see fit.
// You will work with array `numbers` which will be generated by code (code below) in every task.
// Write these functions:

// This block generates array with random length with values between 1-100
export let numbers = [];
const length = Math.ceil(Math.random() * 10) + 5;
for (let i = 0; i < length; i = i + 1) {
  numbers.push(Math.ceil(Math.random() * 100));
}

// a) Function which will print to console a whole array
export const printArray = (numbers) => {
  // Your code:
  //console.log(numbers);
  for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
  }
};

// b) Function which will print to console the length of array
export const printLength = (numbers) => {
  // Your code:
  console.log(numbers.length);
};

// c) Function which will print to console the first element of array
export const printFirstItem = (numbers) => {
  // Your code:
  console.log(numbers[0]);
};

// d) Function which will print to console the last element
export const printLastItem = (numbers) => {
  // Your code:
  console.log(numbers[numbers.length - 1]);
};

// e) Function which will print to console the largest number (You can check Math functions)
export const printLargestItem = (numbers) => {
  // Your code:
  console.log(Math.max(...numbers));
};

// f) Function which will print to console the smallest number (You can check Math functions)
export const printSmallestItem = (numbers) => {
  // Your code:
  console.log(Math.min(...numbers));
};

// g) Function which will print to console the sum of all numbers in array (You can check reduce function)
export const printSum = (numbers) => {
  // Your code:
  console.log(numbers.reduce((a, b) => a + b, 0));
};

// h) Function which will print to console the difference between the largest and the smallest number (You can check Math functions)
export const printSALDifference = (numbers) => {
  // Your code:
  console.log(Math.max(...numbers) - Math.min(...numbers));
};

// i) Function which will print to console the av@erage of all numbers (You can check reduce function)
export const printAverage = (numbers) => {
  // Your code:
  console.log(numbers.reduce((a, b) => a + b, 0) / numbers.length);
};

// j) Function which will print to console the index of largest number (You can check Math functions)
export const printLargestsIndex = (numbers) => {
  // Your code:
  console.log(numbers.indexOf(Math.max(...numbers)));
};

// k) Function which will print to console the even numbers (not the array of even numbers),
// if array doesn't contain any even number, show text "Even number isn't in array"
export const printEvenNums = (numbers) => {
  // Your code:
  let evenNumbers = numbers.filter((number) => number % 2 === 0);
  if(evenNumbers.length === 0){
    console.log("Even number isn't in array");
  }
  else {
    printArray(evenNumbers);
  }
};

// l) Function which will multiple by 2 every number in array and print the array to console
// Example: printNumsMultipliedBy2([1,2,3]) -> [2,4,6]
export const printNumsMultipliedBy2 = (numbers) => {
  // Your code:
  let multipliedBy2 = numbers.map((number) => number * 2);
  printArray(multipliedBy2);
};