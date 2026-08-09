# Recursion Analysis

## What is Recursion Analysis?

Recursion analysis is the process of determining the time and space complexity of a recursive algorithm.

A recursive function solves a problem by calling itself with smaller input values until it reaches a base case.

Unlike simple iterative algorithms, recursive algorithms often require a **recurrence relation** to describe their running time.

---

## Why Analyze Recursive Algorithms?

Recursive algorithms are commonly used in:

- Divide-and-conquer algorithms
- Tree and graph algorithms
- Searching and sorting
- Backtracking
- Dynamic programming

Analyzing their complexity helps us understand how the number of recursive calls and the work performed at each call affect the overall performance.

---

## Recurrence Relations

A recurrence relation expresses the running time of a recursive algorithm in terms of the running time of smaller inputs.

A general form can be written as:

```text
T(n) = Recursive Work + Additional Work
```

For example:
T(n) = 2T(n/2) + Θ(n)
