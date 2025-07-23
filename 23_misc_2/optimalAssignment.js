// https://github.com/gutty333/Hard-Programming-Challenges/blob/master/17_OptimalAssignment.cpp

// nxn matrix represents cost of machine i doing j task.
// optimally assign tasks to machines.

// so it's all....permutations? 123, 132, 213, 231, 312, 321?

// Oh does Greedy work here? Each machine just takes its lowest-cost task?
// couldn't that break? Let's say machine 1 has [10,10,5], so it would work on task 3. but machines 1 and 2 have very high cost for doing task 3. (...?)
// Yeah, it could break! Nice!

// ============

// ✅ Correct Approach: Hungarian Algorithm
// The Hungarian Algorithm solves the assignment problem in polynomial time:
// O(n³) — and it guarantees the optimal assignment.

// Key ideas behind it:
// It's based on graph theory (specifically bipartite matching).

// It finds a minimum-cost perfect matching in a weighted bipartite graph.

// It works by adjusting potentials and improving matchings through augmenting paths.

// Brute Force	✅	Tries all n! permutations — impractical for n > 10
// Hungarian Algo	✅	Efficient (O(n³)) and optimal
