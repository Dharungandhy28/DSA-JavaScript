# Big Theta Notation (Θ)

## Whaat is Big Theta Notation?

Big Theta (Θ) notation is an asymptotic notation used to describe the **tight bound** (exact bound) of an algorithm's time or space complexity.

Unlike Big O, which provides an upper bound, and Big Omega, which provides a lower bound, Big Theta provides **both the upper and lower bounds**. It describes the exact growth rate of an algorithm as the input size (`n`) becomes very large.

---

## Why Do We Need Big Theta Notation?

Big Theta notation helps us:

- Describe the exact growth rate of an algorithm.
- Provide both upper and lower bounds of complexity
- Compare algorithms more precisely
- Analyze algorithms whose running time grows consistently.

---

## Mathematical Definition

Given two functions `f(n)` and `g(n)`, we say that:

```
f(n) = Θ(g(n))
```

if there exist positive constants `c₁`, `c₂`, and `n₀` such that

```
c₁ × g(n) ≤ f(n) ≤ c₂ × g(n)
```

for all

```
n ≥ n₀
```

This means that `f(n)` grows at the same rate as `g(n)` after a certain input size.

---

## Example

Consider traversing an array to calculate the sum of all its elements.

```js
const numbers = [10, 20, 30, 40, 50];
```

Every element is visited exactly once, regardless of the input.

Time Complexity:

```
Θ(n)
```

---

## Key Points

- Represents the exact (tight) bound of an algorithm.
- Combines both upper and lower bounds.
- More informative than Big O or Big Omega when the exact growth rate is known.
- Commonly used for algorithms whose running time is predictable.

---

## Conclusion

Big Theta notation describes the exact growth rate of an algorithm by providing both upper and lower bounds. When the precise asymptotic behavior of an algorithm is known, Big Theta offers the most accurate complexity representation.
