# Analysis of Algorithms

## Key Idea

A single problem can have multiple solutions, and each solution may have a different time complexity. Algorithm analysis helps compare solutions based on the amount of time and memory they require.

## Example: Sum of the First n Natural Numbers

**Input:** n = 3  
**Output:** 6

### Solution 1: Formula-Based Approach

```js
(n * (n + 1)) / 2;
```

**Time Complexity:** O(1)  
**Reason:** Uses a constant number of operations regardless of the value of `n`.

### Solution 2: Iterative Addition

```js
1 + 2 + 3;
```

**Time Complexity:** O(n)  
**Reason:** The number of additions increases linearly with `n`.

### Solution 3: Repeated Addition

Repeatedly adding `1` multiple times to construct each number.

**Time Complexity:** Greater than O(n)  
**Reason:** Requires additional repeated operations, making it less efficient than the linear approach.

## Key Observation

- Solution 1 is the most efficient because it runs in constant time.
- Solution 2 is less efficient because it performs `n` additions.
- Solution 3 is the least efficient among the three approaches.

## Additional Concepts Covered

- Order of Growth
- Linear Functions
- Quadratic Functions
- Comparing Growth Rates
- Choosing the Most Efficient Algorithm

## Conclusion

Algorithm analysis helps determine which solution is more efficient. For large input sizes, even small differences in time complexity can significantly affect performance.
