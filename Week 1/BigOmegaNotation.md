# Big Omega Notation (Ω)

## What is Big Omega Notation?

Big Omega (Ω) notation is an asymptotic notation used to describe the **lower bound** of an algorithm's time or space complexity.

It represents the minimum amount of work an algorithm must perform as the input size (`n`) grows very large. In many introductory examples, Big Omega is used to describe the **best-case time complexity**, although mathematically it represents a lower bound.

---

## Why Do We Need Big Omega Notation?

Big Omega notation helps us:

- Determine the minimum running time of an algorithm
- Describe the lower bound of time or space complexity
- Compare algorithm efficiency from the lower-bound perspective
- Analyze the best possible performance of an algorithm in many practical cases

---

## Mathematical Definition

Given two functions `f(n)` and `g(n)`, we say that:

```
f(n) = Ω(g(n))
```

if there exist positive constants `c` and `n₀` such that

```
f(n) ≥ c × g(n)
```

for all

```
n ≥ n₀
```

This means that `f(n)` grows at least as fast as `g(n)` after a certain input size.

---

## Example

Consider a linear search algorithm.

```
[10, 20, 30, 40, 50]
```

Searching for `10`:

The target is found immediately.

Only one comparison is required.

Best-case time complexity:

```
Ω(1)
```

---

## Key Points

- Represents the lower bound of an algorithm.
- Often associated with best-case analysis.
- Guarantees that the algorithm will take **at least** a certain amount of time.
- A tighter lower bound provides a more accurate complexity analysis.

---

## Conclusion

Big Omega notation is used to describe the minimum growth rate of an algorithm as the input size increases. It provides the lower bound of an algorithm's complexity and helps analyze its best possible performance in many practical scenarios.
