/*
  Problem: Sum of the First n Natural Numbers
  Input : n = 3
  Output: 6

  This file demonstrates three different approaches
  with different time complexities.
*/

const n = 3;

/* -------------------------------------------------
   Solution 1: Formula-Based Approach
   Formula: n * (n + 1) / 2
   Time Complexity : O(1)
   Space Complexity: O(1)
-------------------------------------------------- */

function sumUsingFormula(n) {
  return (n * (n + 1)) / 2;
}

/* -------------------------------------------------
   Solution 2: Iterative Addition
   Add numbers from 1 to n using a loop.
   Time Complexity : O(n)
   Space Complexity: O(1)
-------------------------------------------------- */

function sumUsingLoop(n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
}

/* -------------------------------------------------
   Solution 3: Repeated Increment Approach
   Simulates addition using nested loops.
   Time Complexity : O(n²)
   Space Complexity: O(1)
-------------------------------------------------- */

function sumUsingNestedLoops(n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      sum++;
    }
  }

  return sum;
}

// Example Execution
console.log("Formula Approach:", sumUsingFormula(n));
console.log("Loop Approach:", sumUsingLoop(n));
console.log("Nested Loop Approach:", sumUsingNestedLoops(n));
