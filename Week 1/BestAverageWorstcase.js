/*
  Best, Average, and Worst Case Examples
  -------------------------------------
  This file demonstrates how time complexity can vary
  depending on the input and execution path.
*/

/* -------------------------------------------------
   Example 1: Linear Search
   Best Case  : O(1)
   Average Case: O(n)
   Worst Case : O(n)
-------------------------------------------------- */

function search(arr, x) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) {
      return i;
    }
  }

  return -1;
}

const numbers = [1, 10, 30, 15];

console.log("Linear Search Result:", search(numbers, 30)); // Output: 2

/* -------------------------------------------------
   Example 2: Special Array Sum
   If array length is even, return 0.
   Otherwise, calculate the sum of all elements.

   Best Case  : O(1)  (even length)
   Worst Case : O(n)  (odd length)
-------------------------------------------------- */

function getSum(arr) {
  const n = arr.length;

  // Best case: even length
  if (n % 2 === 0) {
    return 0;
  }

  // Worst case: odd length
  let sum = 0;

  for (let i = 0; i < n; i++) {
    sum += arr[i];
  }

  return sum;
}

const evenArray = [1, 2, 3, 4];
const oddArray = [1, 2, 3, 4, 5];

console.log("Special Sum (Even Array):", getSum(evenArray)); // Output: 0
console.log("Special Sum (Odd Array):", getSum(oddArray)); // Output: 15
