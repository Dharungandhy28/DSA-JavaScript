# Order of Growth

## Key Idea

When a problem has multiple solutions, we compare the time taken by each solution to determine which one is more efficient. Instead of focusing on exact execution time, we analyze how the running time grows as the input size (`n`) increases.

The algorithm with the **smaller order of growth** is generally considered more efficient for large inputs.

## Definition

A function `f(n)` is said to grow faster than `g(n)` if:

```
          g(n)
lim ---------------- = 0
n → ∞    f(n)
```

This means that as `n` becomes very large, `f(n)` dominates `g(n)`.

## Linear Function

A linear function grows proportionally with the input size.

```
y = mx + b
```

**Order of Growth:** `O(n)`

## Quadratic Function

A quadratic function contains a squared term and grows faster than a linear function.

```
y = ax² + bx + c
```

**Order of Growth:** `O(n²)`

## Direct Method to Compare Growth

To find the order of growth quickly:

1. Ignore constant terms.
2. Ignore lower-order terms.
3. Keep only the highest-order term.

## Example

```
f(n) = 2n² + n + 6
```

Order of growth: `n²` → Quadratic

```
g(n) = 100n + 3
```

Order of growth: `n` → Linear

Since `n²` grows faster than `n`, `f(n)` is less efficient for large inputs.

## Example 1

```
f(n) = c1 log n + c2
g(n) = c3 n + c4 log log n + c5
```

Order of growth of `f(n)`: `log n`  
Order of growth of `g(n)`: `n`

Since `n` grows faster than `log n`, `g(n)` has a higher order of growth and is less efficient.

## Example 2

```
f(n) = c1 n² + c2 n + c3
g(n) = c4 n log n + c5 n + c6
```

Order of growth of `f(n)`: `n²`  
Order of growth of `g(n)`: `n log n`

Since `n²` grows faster than `n log n`, `f(n)` has a higher order of growth and is less efficient.

## Key Observation

For large input sizes, the following growth order is commonly observed:

```
log n < n < n log n < n² < n³
```

An algorithm with a lower growth rate is generally preferred because its running time increases more slowly as the input size increases.

## Conclusion

Order of growth helps compare algorithms independently of hardware speed or programming language. By focusing on the highest-order term, we can quickly identify which algorithm scales better for large inputs.
