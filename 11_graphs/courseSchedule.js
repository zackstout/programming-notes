// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.

// Return true if you can finish all courses. Otherwise, return false.

// =====================

// TOPOLOGICAL SORT -- https://www.cs.princeton.edu/~wayne/kleinberg-tardos/pdf/03Graphs.pdf

// the first Hint: "This problem is equivalent to finding if a cycle exists in a directed graph. If a cycle exists, no topological ordering exists and therefore it will be impossible to take all courses."

// =====================
// Ok so we need to check if a cycle exists in the graph. If it does, we can't take all courses.
