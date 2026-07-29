/*
==================================================
Big Theta (Θ) Notation Examples
==================================================

This file demonstrates simple examples of
Big Theta (Θ) notation using JavaScript.

Big Theta represents the exact (tight)
bound of an algorithm.

Examples Covered

1. Θ(1)
2. Θ(n)
3. Θ(n²)
*/

const numbers = [10, 20, 30, 40, 50];

/* ==============================================
   Example 1 : Θ(1)

   Accessing the first element
============================================== */

function getFirstElement(arr) {
  return arr[0];
}

console.log("Θ(1):", getFirstElement(numbers));

/* ==============================================
   Example 2 : Θ(n)

   Sum of all array elements
============================================== */

function sumArray(arr) {
  let sum = 0;

  for (const value of arr) {
    sum += value;
  }

  return sum;
}

console.log("Θ(n):", sumArray(numbers));

/* ==============================================
   Example 3 : Θ(n²)

   Print all possible pairs
============================================== */

function printPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(`(${arr[i]}, ${arr[j]})`);
    }
  }
}

printPairs([1, 2, 3]);
