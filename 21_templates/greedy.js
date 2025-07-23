/**
 * 
 * 
 * Problems where Greedy fails:
 * 
 * - 0-1 Knapsack
 * Problem: Choose a subset of items with weights and values to maximize value without exceeding a weight limit.

Why greedy fails: Picking items with highest value-to-weight ratio may fill the knapsack with small but high-ratio items, missing a better combination of large-value items.


- Job scheduling
Problem: Schedule jobs with deadlines and profits. Each job takes variable time.

Why greedy fails: Choosing highest-profit jobs first can result in missing smaller but better-fitting jobs.


- Coin change
Problem: Make change for a target value with the fewest coins.

Why greedy fails: Works with U.S. coins, but fails with denominations like {1, 3, 4} for amount 6 (greedy gives 1+1+4 = 3 coins, but 3+3 = 2 coins is optimal).


- Set cover
Problem: Cover all elements of a universe using the fewest subsets from a collection.

Why greedy fails: Greedily picking the subset covering the most uncovered elements at each step gives a logarithmic approximation, but not optimal.

Optimal approach: This problem is NP-hard; greedy is the best you can do efficiently, but it’s not optimal.

- Minimum vertex cover
Problem: Choose the smallest set of vertices so that every edge is incident to at least one selected vertex.

Why greedy fails: Picking the vertex with the highest degree may miss optimal cover combinations.

Optimal approach: NP-hard; approximation algorithms exist, but not exact greedy.


- Assignment problem
Problem: Assign agents to tasks minimizing total cost.

Why greedy fails: Assigning the lowest-cost task to each agent may block better combinations.


 */

/**
 * Cases where Greedy DOES work
 * 
 * - Minimum Spanning Tree (Kruskal’s, Prim’s)
 * Algorithms: Kruskal’s and Prim’s.

Greedy choice: Always pick the smallest weight edge that doesn’t create a cycle (Kruskal) or connects to the closest vertex (Prim).

Why it works: Both choices maintain a growing MST without violating optimality.


- Dijkstra’s Algorithm (shortest path without negative weights)


- Huffman Coding
Problem: Build an optimal prefix-free binary code based on symbol frequencies.

Greedy choice: Combine the two least frequent symbols at each step.

Why it works: The least frequent symbols should be deeper in the tree, which greedy guarantees.


- Activity Selection Problem (jobs with start/end times, assuming unit length or non-overlapping)
1. Activity Selection Problem
Problem: Schedule the maximum number of non-overlapping activities.

Greedy choice: Always pick the activity that finishes earliest.
 */
