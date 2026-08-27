/*
Space Complexity Examples

This file demonstrates simple examples
of space complexity using JavaScript.

Examples Covered

1. O(1) - Constant Space
2. O(n) - Linear Space
3. O(n²) - Quadratic Space
4. O(n) - Recursion Stack Space
*/

/* ==============================================
Example 1 : O(1)

Constant Space
============================================== */

function addNumbers(a, b) {
  const sum = a + b;

  return sum;
}

console.log("O(1):", addNumbers(10, 20));

/* ==============================================
Example 2 : O(n)

Linear Space

The result array stores n elements.
============================================== */

function createArray(n) {
  const result = [];

  for (let i = 0; i < n; i++) {
    result.push(i);
  }

  return result;
}

console.log("O(n):", createArray(5));

/* ==============================================
Example 3 : O(n²)

Quadratic Space

The matrix contains n × n elements.
============================================== */

function createMatrix(n) {
  const matrix = [];

  for (let i = 0; i < n; i++) {
    matrix[i] = [];

    for (let j = 0; j < n; j++) {
      matrix[i][j] = 0;
    }
  }

  return matrix;
}

console.log("O(n²):", createMatrix(3));

/* ==============================================
Example 4 : O(n)

Recursion Stack Space

Each recursive call uses stack memory.
============================================== */

function countDown(n) {
  if (n <= 0) {
    return;
  }

  countDown(n - 1);
}

countDown(5);

console.log("O(n): Recursion stack space");
