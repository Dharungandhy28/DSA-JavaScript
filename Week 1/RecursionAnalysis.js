/*
Recursion Analysis Examples

This file demonstrates simple examples of
recursion analysis using JavaScript.

Recursive algorithms can be analyzed using
recurrence relations to determine their
time and space complexity.

Examples Covered

1. Linear Recursion
2. Binary Recursion
3. Divide and Conquer Recursion
4. Multiple Recursive Calls with a Loop
*/

/* ==============================================
Example 1 : Linear Recursion

Time Complexity: O(n)
Space Complexity: O(n)
============================================== */

function countDown(n) {
  if (n <= 0) {
    return;
  }

  console.log(n);
  countDown(n - 1);
}

console.log("Example 1 : Linear Recursion");
countDown(5);

/* ==============================================
Example 2 : Binary Recursion

Time Complexity: O(2ⁿ)
Space Complexity: O(n)
============================================== */

function fibonacci(n) {
  if (n <= 1) {
    return n;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log("Example 2 : Binary Recursion");
console.log("Fibonacci(5):", fibonacci(5));

/* ==============================================
Example 3 : Divide and Conquer Recursion

Time Complexity: O(log n)
Space Complexity: O(log n)
============================================== */

function divideAndCount(n) {
  if (n <= 1) {
    return 1;
  }

  return divideAndCount(Math.floor(n / 2));
}

console.log("Example 3 : Divide and Conquer Recursion");
console.log("Result:", divideAndCount(16));

/* ==============================================
Example 4 : Multiple Recursive Calls with a Loop

Recurrence:
T(n) = 2T(n/2) + O(n)

Time Complexity: Θ(n log n)
Space Complexity: O(log n)
============================================== */

function recursiveWork(n) {
  if (n <= 1) {
    return;
  }

  recursiveWork(Math.floor(n / 2));
  recursiveWork(Math.floor(n / 2));

  for (let i = 0; i < n; i++) {
    // Constant-time operation
  }
}

console.log("Example 4 : Multiple Recursive Calls with a Loop");
recursiveWork(8);
