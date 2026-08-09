/*
Recursion Tree Method Examples

This file contains JavaScript examples
corresponding to the recurrence relations
discussed in RecursionTreeMethod.md.

Examples Covered

1. T(n) = T(n / 2) + c
2. T(n) = 2T(n / 2) + c
3. T(n) = T(n - 1) + c
4. T(n) = T(n - 1) + T(n - 2) + c
*/

/* ==============================================
Example 1 : T(n) = T(n / 2) + c

Time Complexity: Θ(log n)
============================================== */

function divideByTwo(n) {
  if (n <= 1) {
    return;
  }

  console.log(n);

  divideByTwo(Math.floor(n / 2));
}

divideByTwo(16);

/* ==============================================
Example 2 : T(n) = 2T(n / 2) + c

Time Complexity: Θ(n)

This function makes two recursive calls
with the input divided by 2.
============================================== */

function twoRecursiveCalls(n) {
  if (n <= 1) {
    return;
  }

  console.log(n);

  twoRecursiveCalls(Math.floor(n / 2));
  twoRecursiveCalls(Math.floor(n / 2));
}

twoRecursiveCalls(8);

/* ==============================================
Example 3 : T(n) = T(n - 1) + c

Time Complexity: Θ(n)
============================================== */

function decreaseByOne(n) {
  if (n <= 1) {
    return;
  }

  console.log(n);

  decreaseByOne(n - 1);
}

decreaseByOne(5);

/* ==============================================
Example 4 : T(n) = T(n - 1) + T(n - 2) + c

Naive recursive Fibonacci.

Time Complexity: O(2^n)

A tighter bound is Θ(φ^n), where
φ is the golden ratio.
============================================== */

function fibonacci(n) {
  if (n <= 1) {
    return n;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log("Fibonacci:", fibonacci(6));
