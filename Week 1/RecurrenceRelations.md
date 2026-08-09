# Recurrence Relations

## What are Recurrence Relations?

A **recurrence relation** is a mathematical equation that defines a function in terms of smaller inputs.

In Data Structures and Algorithms, recurrence relations are mainly used to represent the **time complexity of recursive algorithms**.

For example:

T(n) = 2T(n/2) + Θ(n)

Here:

- T(n) represents the running time for input size n.
- 2T(n/2) represents two recursive calls, each operating on half of the input.
- Θ(n) represents the additional work performed outside the recursive calls.

### Why Are Recurrence Relations Important?

Recurrence relations helps us:

- Analyze the time complexity of recursive algorithms.

- Represent divide-and-conquer algorithms mathematically.

- Understand how recursive calls contribute to total running time.

- Solve the complexity of recursive algorithms using different methods.

### General Form

A common form of a recurrence relation for recursive algorithms is:

T(n) = aT(n/b) + f(n)

Where:

- a = number of recursive calls.
- n/b = size of each subproblem.
- f(n) = work performed outside the recursive calls.
- T(n) = total running time for input size n.

### Base Case

A recurrence relation must have a base case that defines when the recursion stops.

For example:

T(n) = 2T(n/2) + Θ(n)
T(1) = Θ(1)

Here, T(1) = Θ(1) is the base case.

The base case prevents the recursive process from continuing indefinitely.

### Common Examples

Binary Search

Binary Search divides the search space into half at every recursive call.

T(n) = T(n/2) + Θ(1)

Therefore:

T(n) = Θ(log n)

### Merge Sort

Merge Sort divides the array into two halves and recursively sorts both halves.

T(n) = 2T(n/2) + Θ(n)

Therefore:

T(n) = Θ(n log n)

### Tower of Hanoi

The Tower of Hanoi recurrence can be represented as:

T(n) = 2T(n-1) + Θ(1)

Therefore:

T(n) = Θ(2^n)

### Common Methods to Solve Recurrence Relations

The commonly used methods for solving recurrence relations are:

1. Substitution Method
   Guess the form of the solution and prove it using mathematical induction.

2. Recurrence Tree Method
   Represent recursive calls as a tree and calculate the work performed at each level.

3. Master Method
   Provides a direct way to solve many divide-and-conquer recurrences of the form:
   T(n) = aT(n/b) + f(n)

### Key Takeaway

- Recurrence relations describe recursive problems mathematically.

- They are widely used to analyze the time complexity of recursive algorithms.

- A recurrence normally consists of a recursive part, additional work, and a base case.

- Binary Search, Merge Sort, and Tower of Hanoi can be represented using recurrence relations.

- Substitution Method, Recurrence Tree Method, and Master Method are commonly used to solve recurrences.
