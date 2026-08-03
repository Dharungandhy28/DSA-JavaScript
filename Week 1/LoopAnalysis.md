# Loop Analysis

## What is Loop Analysis?

Loop analysis is the process of determining the time complexity of an algorithm by analyzing how many times a loop executes as the input size (`n`) increases.

Instead of measuring the actual execution time, we estimate the number of operations performed and express the result using asymptotic notation.

---

## Steps to Analyze a Loop

To analyze the complexity of a loop:

1. Determine the number of loop iterations.
2. Determine the number of operations executed in each iteration.
3. Express the total number of operations as a function of the input size.
4. Simplify the expression to determine the order of growth.

---

## Common Loop Complexities

### 1. Constant Time — O(1)

A loop that executes a fixed number of times has constant time complexity.

Example:

```js
for (let i = 1; i <= 10; i++) {
  // Constant number of iterations
}
```

Examples:

- Swapping two variables
- Printing a fixed number of values

---

### 2. Linear Time — O(n)

A loop whose variable increases or decreases by a constant amount executes approximately `n` times.

Example:

```js
for (let i = 0; i < n; i++) {
  // Executes n times
}
```

Examples:

- Linear Search
- Array Traversal

---

### 3. Quadratic Time — O(n²)

Nested loops with approximately `n` iterations each execute `n × n` operations.

Example:

```js
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    // Executes n² times
  }
}
```

Examples:

- Bubble Sort
- Selection Sort
- Insertion Sort (Worst Case)

---

### 4. Logarithmic Time — O(log n)

When the loop variable is multiplied or divided by a constant value during each iteration.

Example:

```js
for (let i = 1; i <= n; i *= 2) {
  // Executes log₂n times
}
```

Example Algorithms:

- Binary Search
- Balanced Binary Tree Search

---

### 5. Log Log Time — O(log log n)

Occurs when the loop variable grows exponentially.

Example:

```js
for (let i = 2; i <= n; i = i * i) {
  // Executes log log n times
}
```

This complexity is relatively uncommon but appears in certain advanced algorithms.

---

## Consecutive Loops

When loops execute one after another, their time complexities are added.

Example:

```js
for (...) { }

for (...) { }
```

Time Complexity:

```
O(m) + O(n)
```

If `m = n`:

```
O(2n) → O(n)
```

The constant factor is ignored.

---

## Loops with Conditional Statements

When loops contain multiple `if` or `else` blocks, complexity is generally analyzed using the **worst-case execution path**.

Example:

- Linear Search
- Binary Search

The path that performs the maximum number of operations determines the time complexity.

---

## Key Observations

- Count loop iterations rather than execution time.
- Ignore constants and lower-order terms.
- Nested loops usually multiply complexities.
- Consecutive loops usually add complexities.
- Focus on worst-case complexity unless specified otherwise.

---

## Conclusion

Loop analysis is one of the most fundamental techniques in algorithm analysis. By understanding common loop patterns and their corresponding time complexities, developers can estimate algorithm performance and design more efficient solutions.
