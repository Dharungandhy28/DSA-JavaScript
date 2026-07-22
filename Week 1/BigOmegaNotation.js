/*
==================================================
Big Omega (Ω) Notation Examples
==================================================

This file demonstrates simple examples of
Big Omega (Ω) notation using JavaScript.

Big Omega represents the lower bound of an
algorithm's running time.

Examples Covered

1. Ω(1)
2. Ω(n)
3. Ω(n²)
*/

const numbers = [10, 20, 30, 40, 50];

/* ==============================================
   Example 1 : Ω(1)

   Best Case of Linear Search
============================================== */

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }

  return -1;
}

// Target found immediately
console.log("Ω(1):", linearSearch(numbers, 10));

/* ==============================================
   Example 2 : Ω(n)

   Print every element
============================================== */

function printElements(arr) {
  for (const element of arr) {
    console.log(element);
  }
}

printElements(numbers);

/* ==============================================
   Example 3 : Ω(n²)

   Print all possible pairs
============================================== */

function printPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        console.log(`${arr[i]} ${arr[j]}`);
      }
    }
  }
}

printPairs([1, 2, 3]);
