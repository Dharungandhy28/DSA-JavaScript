/* problem Sum of n natural numbers where input n = 3 and output = 6
There are 3 solutions for this problem
*/
// Solution 1

n = 3;

function fun1(n) {
  return (n * (n + 1)) / 2;
}

// Time Complexity O(1)

// solution 2

function fun2(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum = sum + i;
  }
  return sum;
}

// Time complexity O(n)

// Solution 3

function fun3(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      sum++;
    }
  }
  return sum;
}

// Time Complexity O(n²)
