# Big O Notation

## What is Big O Notation?

Big O noation is a mathematical notation used to describe the upper bound of an algorithm's time or space complexity as the input size ('n') becomes very large.

It focuses on the worst-case growth rate of an algorithm rather rhan its exact execution time, making it easier to comparre the efficiency of different algorithms.

---

## Why Do We Need Big O Notation?

- Measure the worse-case performance of an algorithm
- Compare different algorithms fairly
- Ignore hardware and implementation-specific differences
- Predict how an algorithm scales with larger inputs
- Choose more efficient algorithms

---

## Mathematical Definition

A function 'f(n)' is said to be **O(g(n))** if there exist positive constants 'c' and `n₀` such that:

```
f(n) ≤ c × g(n)
```

for all

```
n ≥ n₀
```

This means that `g(n)` grows at least as fast as `f(n)` after a certain input size.

---

## How to Find Big O

To determine the Big O of an expression:

1. Ignore constant factors.
2. Ignore lower-order terms.
3. Keep only the highest-order term.

### Example 1

```
f(n) = 3n² + 2n + 1000 log n + 5000
```

Big O:

```
O(n²)
```

### Example 2

```
f(n) = 4n³ + 6n² + 2n + 1
```

Big O:

```
O(n³)
```

---

## Common Big O Complexities

| Complexity | Example               |
| ---------- | --------------------- |
| O(1)       | Array indexing        |
| O(log n)   | Binary Search         |
| O(n)       | Linear Search         |
| O(n log n) | Merge Sort            |
| O(n²)      | Bubble Sort           |
| O(n³)      | Matrix Multiplication |
| O(2ⁿ)      | Generate Subsets      |
| O(n!)      | Generate Permutations |

---

## Key Takeaways

- Big O represents the upper bound of an algorithm.
- It is commonly used for worst-case analysis.
- It ignores constants and lower-order terms.
- It helps compare algorithm efficiency.

---

## Conclusion

Big O notation is one of the most widely used asymptotic notations for analyzing algorithms. It provides a simple and standardized way to estimate how an algorithm's running time or memory usage grows as the input size increases.
