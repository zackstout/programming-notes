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

## Knapsack problem

## DP Optimizations

## Tasks

---

# Geometry

## Elementary operations

### Basic geometry

- Dot product: length of v1 \* length of projection of v2 onto v1
- Hence: a dot b = |a| |b| cos(theta)
- From behavior of unit vectors under dot product, and its commutativity and associativity, we deduce that algebraically it is the sum of componentwise products.
- |a|<sup>2</sup> = a dot a
- Equal to zero iff vectors are orthogonal (follows from relation to cosine)
- Projection of a onto b is (a dot b) / |b|
- We can define a line in terms of dot product with a given vector to yield a given constant
- And similarly we can define a plane in this way in 3d
- b x c is orthogonal to both b and c, with length equal to the area of the parallelogram they contain.
- Volume of parallelopiped is | a dot (b x c) |.
- |a x b| = |a||b|sin(theta), follows from parallelogram area definition, not quite sure why... -- ah sure because that gives us height of parallelogram.
- Computed as determinant of matrix that "includes" unit vectors as "entries"
- The "triple product" a dot (b x c) is... the same as the determinant of the matrix with those vectors considered as columns??? why??
- Well sure I guess we already knew determinant measures volume of parallelopiped... but... huh...
- Oh duh because of matrix definition of cross product, if you dot that with a vector, you get.... a matrix with those as columns. Yep.
- So e.g. intersection of planes is quickly solved with Cramer's rule for computing determinant

### Finding equation of a line segment

- Given two points ((x1, y1) and (x2, y2)), find equation of a line through them (Ax + By + C = 0).
- A = y1 - y2, B = x2 - x1, C = -Ax1 - By1.... huh....
- Already in 3d there is no simple equation defining a line -- huh!
- So we fall back to parameterizing as P + <strong>v</strong> \* t.

### Intserction point of lines

### Check if two segments intersect

### Intersection of segments

### Circle-line intersection

### Circle-circle intersection

### Common tangents to two circles

### Length of the union of segments

## Polygons

### Oriented area of a triangle

### Area of simple polygon

### Check if points belong to the convex polygon in O(log N)

### Minkowski sum of convex polygons

### Pick's theorem - area of lattice polygons

### Lattice points of non-lattice polygon

## Convex hull

### Construction

### Convex hull trick and Li Chao tree

## Sweep-line

### Search for a pair of intersecting segments

## Planar graphs

### Finding faces of a planar graph

### Point location in O(log N)

## Miscellaneous

### Finding the nearest pair of points

### Delaunay triangulation and Voronoi diagram

### Vertical decomposition

### Half-plane intersection - S&I Algorithm in O(N log N)

### Manhattan Distance

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

### Gauss and systems of linear equations

- Gauss-Jorden elimination
- exchange rows, and replace row with linear combination of rows
- find pivot points (non-zero element in ith column)

### Gauss and Determinant

- Apply previous algorithm, just exclude the division by a<sub>ii</sub>.
- Determinant is product of elements on diagonal.
- Every time we swap rows, we change sign of determinant.

### Kraut and Determinant

### Rank of a matrix

- Largest number of linearly independent rows/columns in a matrix.

---

# Miscellaenous

## Sequences

## Game Theory

## Schedules

## Miscellaneous

---

# Numerical Methods

## Search

### Binary Search

- Main idea is to split the search space in half recursively.
- Most often used for sorted arrays.
- For ten million-size array, only need to make 20 steps.

### Ternary Search

### Newton's method for finding roots

## Integration

### Simpson's formula

- Subdivide the region into 2n rectangles, and then for each [2i-2, 2i] region, consider and integrate the parabola formed by points at 2i-2, 2i-1 and 2i.
- Dang super interesting, so you get a 1/3 factor in the formula from the parabola..

---

# String Processing

## Fundamentals

## Advanced

## Tasks

---
