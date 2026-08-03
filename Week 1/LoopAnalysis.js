/*
=====================================================
Loop Analysis Examples
Language : JavaScript
=====================================================

This file demonstrates common loop patterns and their
time complexities.

Topics Covered

1. O(1)
2. O(n)
3. O(n²)
4. O(log n)
5. O(log log n)
6. Consecutive loops
=====================================================
*/

/*-----------------------------------------
1. Constant Time — O(1)
------------------------------------------*/

function constantExample() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}

/*-----------------------------------------
2. Linear Time — O(n)
------------------------------------------*/

function linearExample(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}

/*-----------------------------------------
3. Quadratic Time — O(n²)
------------------------------------------*/

function quadraticExample(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}

/*-----------------------------------------
4. Logarithmic Time — O(log n)
------------------------------------------*/

function logarithmicExample(n) {
  for (let i = 1; i <= n; i *= 2) {
    console.log(i);
  }
}

/*-----------------------------------------
5. Log Log Time — O(log log n)
------------------------------------------*/

function logLogExample(n) {
  for (let i = 2; i <= n; i = i * i) {
    console.log(i);
  }
}

/*-----------------------------------------
6. Consecutive Loops — O(m + n)
------------------------------------------*/

function consecutiveLoops(m, n) {
  for (let i = 0; i < m; i++) {
    console.log("First Loop:", i);
  }

  for (let j = 0; j < n; j++) {
    console.log("Second Loop:", j);
  }
}

/*-----------------------------------------
Example Execution
------------------------------------------*/

constantExample();
linearExample(5);
quadraticExample(3);
logarithmicExample(32);
logLogExample(65536);
consecutiveLoops(3, 5);
