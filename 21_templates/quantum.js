/**
 * Given a large integer 
𝑁
N, find its prime factors.

This problem underpins the security of RSA encryption — factoring large numbers is believed to be classically hard (no known polynomial-time classical algorithm).

Classical best-known algorithms (like the General Number Field Sieve) run in sub-exponential but still super-polynomial time.


⚡ Shor’s Algorithm (1994)
What it does:
Efficiently finds the prime factors of a composite number N on a quantum computer.

Runs in polynomial time (specifically, polynomial in logN) — exponentially faster than the best classical algorithms.



the speedup comes from finding ORDER r, of a randomly chosen a, modulo N. Whoa.
 */

/**
 * Grover's algorithm:
 * 
 * Unstructured search: Given a database (or list) of N items, find the one item that satisfies a certain condition (e.g., a “marked” item).

Classically, without any structure, you must check on average O(N) items.

Grover’s algorithm finds the item in roughly O(sqrt(N)) queries — a quadratic speedup.
 */

/**
 * By harnessing superposition and entanglement, quantum computers can process a huge number of possibilities in parallel.
 */
