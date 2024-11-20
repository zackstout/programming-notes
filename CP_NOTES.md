# Competitive Programming notes

---

https://cp-algorithms.com/

---

# Algebra

## Fundamentals

### Binary Exponentiation

### Euclidean algorithm for GCD

### Extended Euclidean algorithm

### Linear Diophantine equations

### Fibonacci numbers

## Prime Numbers

### Sieve of Eratosthenes

### Linear Sieve

### Primality tests

### Integer factorization

## Number-theoretic functions

### Euler's totient function

### Number and sum of divisors

## Modular arithmetic

### Modular inverse

### Linear Congruence equation

### Chinese remainder theorem

### Garner's algorithm

### Factorial modulo p

### Discrete log

### Primitive root

### Discrete root

### Montgomery multiplication

## Number systems

### Balanced ternary

### Gray code

## Miscellaneous

### Bit manipulation

### Enumerating submasks of a bitmask

### Arbitrary-Precision Arithmetic

### Fast Fourier transform

### Operations on polynomials and series

### Continued fractions

### Factoring Exponentiation

---

# Combinatorics

## Fundamentals

### Finding Power of Factorial Divisor

- You are given two numbers n and k. Find the largest power of k (x) such that k<sup>x</sup> | n!.
- For prime k: Note that each k-th factor of n! adds another k-divisor. Each k<sup>2</sup>-th element adds another k-divisor, and so on.
- Result is called Legendre's formula
- For composite k: break k into prime factors and apply above idea.

### Binomial Coefficients

- Represented like "n over k" in parentheses: number of ways to choose k elements from n elements (without caring about order).
- They are the coefficients in the expansion of (a + b)<sup>n</sup>.
- n choose k is equal to n! / (k! \* (n-k)!).
- Deduce this from formula for number of ordered arrangements, which is n! / (n-k)!.
- There is a recurrence relation (associated with Pascal's triangle).
- n choose k = (n-1) choose (k-1) times n/k.
- Sum over all k of n choose k is 2<sup>n</sup>.
- Sum over all n of n choose k is (n+1) choose (k+1).
- Often we need to compute n choose k mod m.

### Catalan Numbers

- 1, 1, 2, 5, 14, 42, 132, 429, 1430, ...
- Number of correct bracket sequences of n brackets.
- Number of triangulations of convex polygon with n+2 sides.
- Number of ways to connect 2n points on a circle to form n disjoint chords.
- Recurrence relation...
- And analytical formula: C<sub>n</sub> = (1 / (n + 1)) \* (2n choose n).

## Techniques

### Inclusion-Exclusion Principle

### Burnside's Lemma and Polya enumeration

### Stars and bars

- The number of ways to put n identical objects into k labeled boxes is (n + k - 1) choose n.
- Think of n as stars, and (k - 1) as bars separating into k boxes.
- Then our answer is the number of permutations of n stars and (k-1) bars.
- (Huh, I don't fully get it... shouldn't that number be (n + k - 1)! ? No because many are identical...)
- Number of non-negative integer sums
- Number of positive integer sums
- Number of lower-bound integer sums

### Generating all k-combinations

- Given natural numbers n and k, derive all subsets of size K (from set of numbers from 1 to n).

## Tasks

---

# Data Structures

## Fundamentals

## Trees

## Advanced

---

# Dynamic Programming

## Introduction

## Knapsack

## Optimizations

## Tasks

---

# Geometry

## Elementary operations

## Polygons

## Convex hull

## Sweep-line

## Planar graphs

## Miscellaneous

---

# Graphs

## Graph traversal

## Connected components, bridges, articulation points

## Single-source shortest paths

## All-pairs shortest paths

## Spanning trees

## Cycles

## Lowest common ancestor

## Flows and related problems

## Matchings and related problems

## Miscellaneous

---

# Linear Algebra

## Matrices

---

# Miscellaenous

## Sequences

## Game Theory

## Schedules

## Miscellaneous

---

# Numerical Methods

## Search

## Integration

---

# String Processing

## Fundamentals

## Advanced

## Tasks

---
