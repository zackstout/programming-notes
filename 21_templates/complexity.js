/**
 *
 * NP = Non-deterministic polynomial time.
 *
 *
 * NP means, solution can be verified in polynomial time (but not necessarily found in that time).
 *
 * Example: SAT (Boolean satisfiability)
 *
 * NP-hard means: At least as hard as every NP problem (if you could solve it, you could solve them all).
 *
 * NP-hard does not have to be NP.
 *
 * NP-complete is the intersection of NP and NP-hard.
 *
 *
 * ("A reduces to B" => B is at least as hard as A.)
 *
 *
 * The first problem shown to be NP-complete was SAT (Cook-Levin, 1971).
 *
 * Then, others were reduced from SAT (that is, SAT is reduced to them.)
 *
 * SAT reduces to 3-SAT, and then to Cliques problem.
 *
 * Clique then reduces to Vertex cover by considering the complement graph.
 *
 * A different problem class includes number, subset sum, knapsack-style problems: 3-SAT leads to Subset sum.
 */
