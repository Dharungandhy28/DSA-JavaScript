/*
==================================================
Big O Notation Examples
==================================================

This file demonstrates common Big O time
complexities using JavaScript.

Topics Covered

1. O(1)
2. O(n)
3. O(log n)
4. O(n²)

More advanced complexities such as O(n³),
O(2ⁿ), and O(n!) will be covered in later topics.
*/

const numbers = [2, 4, 6, 8, 10, 12, 14, 16];

/* ==============================================
   O(1) - Constant Time
============================================== */

function getFirstElement(arr) {
  return arr[0];
}

console.log(getFirstElement(numbers));

/* ==============================================
   O(n) - Linear Time
============================================== */

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }

  return -1;
}

console.log(linearSearch(numbers, 10));

/* ==============================================
   O(log n) - Logarithmic Time
============================================== */

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return mid;

    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

console.log(binarySearch(numbers, 10));

/* ==============================================
   O(n²) - Quadratic Time
============================================== */

function printPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
    }
  }
}

printPairs([1, 2, 3]);
