# Order of growth

## Key Idea

- In multiple solutions we need to find out which one is good so that we find out time taken by all the solutions.
- we write a polynomial and see order or growth of every time taken and which order is having the least order of growth we say that is <b>efficient</b>

### Order of Growth

A function f(n) is said to be growing faster then g(n) if

lim g(n)

    _____ = 0

n->∞ f(n)

<hr />

## Linear Function

A linear function in JS calculate the value of a function following a straight line equation

(y = mx+b)

<hr />

## Quadratic Function

A quadratic function in JS calculates the value of a function following a second-degree.

polynomial equation (y = ax² + bx +c)

### Direct way to find to find and compare growth

- Ignore lower order terms
- Ignore leading terms

### Example

f(n) = 2n² + n + 6 order of growth : n² (quadratic)

g(n) = 100n + 3 order of growth: n(linear)

Direct way to do

- Example 1

f(n) = c1 log n + c2
g(n) = c3 n + c4 log log n + c5

order of growth of f(n) is : log n
order of growth of g(n) is : n

Here higher order of growth is g(n) -> Bad algorithm

- Example 2

f(n) = c1 n² + c2 n + c3
g(n) = c4 nlogn + c5n + c6

order of growth of f(n) is : n
order of growth of g(n) is : log n

Here higher order of growth is f(n) -> Bad algorithm
