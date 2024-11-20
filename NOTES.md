# Data Structures and Algorithms

---

## (1) Arrays/Strings

### Merge Sorted Array

### Remove Element

### Remove Duplicates from Sorted Array

### Remove Duplicates from Sorted Array II

### Majority Element

### Rotate Array

### Best Time to Buy and Sell Stock

### Best Time to Buy and Sell Stock II

### Jump Game

### Jump Game II

### H-Index

### Insert Delete GetRandom O(1)

### Product of Array Except Self

### Gas Station

### Candy

### Trapping Rain Water

### Roman to Integer

### Integer to Roman

### Length of Last Word

### Longest Common Prefix

### Reverse Words in a String

### Zigzag Conversion

### Find the Index of the First Occurrence in a String

### Text Justification

---

## (2) Two Pointers

### Valid Palindrome

- After lowercasing and removing non-alphanumeric characters, is the string a palindrome?
- _Strategy_: Yep, walk from start and end and check equality, sure.

### Is Subsequence

- Input: s = "abc", t = "ahbgdc"
- Output: true
- _Strategy_: Guess we just have a pointer going through each string.. Yep, seems good.

### Two Sum II - Input Array Is Sorted

- Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number.
- _Strategy_: Very similar to binary search -- use start and end markers -- if sum is too small, raise start, otherwise decrease end.

### Container With Most Water

- You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
- Find two lines that together with the x-axis form a container, such that the container contains the most water.
- Return the maximum amount of water a container can store.
- _Strategy_: Markers for start and end -- always move one with lower height, because if move other, area must decrease.

### 3Sum

- Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
- _Strategy_: Iterate through list, fixing one value, and then running two-sum on the rest. Make sure to sort first if using binary search version.

### Trapping Rain Water (\*)

- Hard

---

## (3) Sliding Window

### Minimum Size Subarray Sum

- Given an array of positive integers nums and a positive integer target, return the minimal length of a subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.
- Input: target = 7, nums = [2,3,1,2,4,3]
- Output: 2
- _Strategy_: initialize left and right at 0, increment right and add to sum while it's less than target, otherwise increment left and remov from sum.

### Longest Substring Without Repeating Characters

- Given a string s, find the length of the longest substring without repeating characters.
- Input: s = "abcabcbb"
- Output: 3
- _Strategy_: initialize left and right at 0, increment right and add to seen while it's unseen, otherwise increment left and remove from seen.

### Substring with Concatenation of All Words

- You are given a string s and an array of strings words. All the strings of words are of the same length.
- A concatenated string is a string that exactly contains all the strings of any permutation of words concatenated.
- Return an array of the starting indices of all the concatenated substrings in s. You can return the answer in any order.
- Input: s = "barfoothefoobarman", words = ["foo","bar"]
- Output: [0,9]

- hard

### Minimum Window Substring

- Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".
- Input: s = "ADOBECODEBANC", t = "ABC"
- Output: "BANC"

- hard

### Permutation in string (\*)

// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.
// In other words, return true if one of s1's permutations is a substring of s2.

### Buy and Sell Stock (\*)

// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

---

## (4) Matrix

### Valid Sudoku

- Determine whether a 9x9 sudoku board is valid.

### Game of Life

- Update the state of a game-of-life board

### Spiral Matrix

- Return elements of matrix in spiral order (CW from upper left).
- _Strategy_: simulate it!

### Rotate Image

- Rotate an nxn matrix 90 degrees CW and in-place.
- _Strategy_: Use the trick that rotation is equivalent to transposition plus horizontal flip.

### Set Matrix Zeroes

- Propagate zeros along their entire rows and columns, in-place.
- _Strategy_: There is a sneaky O(1)-space solution that involves using cells in the matrix to flag whether it has been set or not.
- But plenty of other solutions that just involve tracking which rows and columns need to be 0'd.

---

## (5) Hash Map

### Ransom Note

- Given "ransom note" and "magazine" determine if note can be created from characters in magazine (using each only once).
- _Strategy_: Count char freq in magazine, then iterate through note and decrement each letter's count. If ever go negative, impossible.

### Isomorphic Strings

- Given two strings, determine if they are isomorphic (i.e. can be turned into each other by replacing all occurences of same character).
- Input: s = "egg", t = "add"
- Output: true
- _Strategy_: Iterate through each string and keep track of last index where you saw current character, for each one. If ever mismatch, not isomorphic.

### Word Pattern

- Determine whether a set of words follows a given pattern (such as "abba").

### Valid Anagram

- Given two strings, determine if they are anagrams of one another.
- _Strategy_: I guess do character freq counts for both, check if equal. (Oh duh or just sort them and check equality lol..)

### Group Anagrams

- Given array of strings, group the anagrams together.
- _Strategy_: Use sorting trick. Sorted name of each string will become its "key".

### Two Sum

### Happy Number

- A happy number lands on 1 after process of summing the squares of its digits repeatedly.
- _Strategy_: use a hash map to keep track of numbers you've seen -- if you see one again, you know you're in a loop and can return false.

### Contains Duplicate II

- Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.
- _Strategy_: Yep just hash map to track ones we've seen.

### Longest Consecutive Sequence

- Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
- You must write an algorithm that runs in O(n) time.
- Strategy: Use a set to represent all elements of the array. Then iterate through -- and we can skip anyone whose decrement is in the set, since it's not the start -- and for each starter, increment length for as long as increment is in set.

---

## (6) Intervals

### Summary Ranges

- Given a sorted unique array of nums, return smallest sorted list of covering ranges.
- Input: nums = [0,1,2,4,5,7]
- Output: ["0->2","4->5","7"]
- _Strategy_: Just iterate through, keep track of curr and start, check whether next number is one greater than curr.

### Merge Intervals

- Given an array of intervals, merge all overlapping intervals and return list of covering ranges.
- Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
- Output: [[1,6],[8,10],[15,18]]
- _Strategy_: Straightforward (first must sort by start time). Iterate through, keeping track of prev interval, check if current overlaps with prev, if so merge them, otherwise push prev to result.

### Insert Interval

- Given an array of non-overlapping intervals and an interval to insert, insert it and merge if needed.
- Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
- Output: [[1,5],[6,9]]

### Minimum Number of Arrows to Burst Balloons

- Given an array representing diameters of balloons, return minimum number of "arrows" needed to "pierce" each interval.
- Input: points = [[10,16],[2,8],[1,6],[7,12]]
- Output: 2

### Meeting Rooms (detect overlap) (\*)

- Given an array of intervals, return boolean representing whether there is an overlap (i.e. can a person attend all the meetings?).
- _Strategy_: Sort them by start time, and then iterate, and check for each whether its start time precedes previous interval's end time.
- That is only way for overlap to occur; it is guaranteed that A starts before B ends, so we only need to check whether B starts before A ends.
- Essentially same idea as "Merge Intervals".

### Meetings Rooms II (\*)

- Given an array of intervals representing meetings, return minimum number of conference rooms required.

- ??? Min heap?

---

## (7) Stacks

### Valid Parentheses

- Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
- Input: s = "()[]{}"
- Output: true
- _Strategy_: push tokens onto stack, when see new one, pop from stack and check that this is closing part of pair.

### Simplify Path

- You are given an absolute path for a Unix-style file system, which always begins with a slash '/'. Your task is to transform this absolute path into its simplified canonical path.
- Input: path = "/home/user/Documents/../Pictures"
- Output: "/home/user/Pictures"

### Min Stack

- Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

- ???

### Evaluate Reverse Polish Notation

- You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.
  Evaluate the expression. Return an integer that represents the value of the expression.
- Input: tokens = ["2","1","+","3","*"]
- Output: 9
- _Strategy_: shift tokens from front of array, add to stack. When you hit an operator, pop twice, and push relevant result onto stack.

### Basic Calculator

- Hard
- Given a string s representing a valid expression, implement a basic calculator to evaluate it, and return the result of the evaluation.
- Input: s = "(1+(4+5+2)-3)+(6+8)"
- Output: 23

### Car Fleet (\*)

- ???

### Daily Temperatures (\*)

- Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.
- Input: [73, 74, 75, 71, 69, 72, 76, 73]
- Output: [1, 1, 4, 2, 1, 1, 0, 0]
- _Strategy_: keep stack with indexes of temps, representing all those that have not seen higher future temp yet. Iterate through temps.
- When you see a new temp, go backward through stack while current temp is higher than what's in stack; remove from stack and record answer.

### Largest Rectangle in Histogram (\*)

- Hard

---

## (8) Linked Lists

- A prev node is always required when we need to delete nodes or break links (and create new links).

### Linked List Cycle

- Detect whether a linked list contains a cycle.
- _Strategy_: two pointers, slow and fast; if fast catches slower, there is a cycle.

### Add Two Numbers

- Given two numbers represented digit-by-digit as linked lists, return linked list reprsented their sum.
- _Strategy_: use typical carry-based algo and build up list as you go.

### Merge Two Sorted Lists

- Given two linked lists, return the merged version.
- _Strategy_: Use recursion, take smallest current element and set its next to be the result of merging the remainders.

### Remove Nth Node From End of List

- Given the head of a linked list, remove the nth node from the end of the list and return its head.

- _Strategy_: move head forward n nodes, then start moving head and dummy forward until head reaches end. Then remove next node.
  (Remember to keep ref to head so you can return res.next at end.)

### Remove Duplicates from Sorted List II

- Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.

- _Strategy_: Use fact that list is sorted, so you can just skip nodes that have same value as next node. (Keep a prev node reference, which keeps track of the new list that we will return.)

### Rotate List

- Given the head of a linked list, rotate the list to the right by k places.

- _Strategy_: find length of list (since we need to reduce k to (length - k%length)). Set head to the (length - k)th node. Set head of last node to first node, to make it circular. Break circularity when you find new head.

### Copy List with Random Pointer

A linked list of length n is given such that each node contains an additional random pointer, which could point to any node in the list, or null.

Construct a deep copy of the list.

### Reverse Linked List II

Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.

### Partition List

Given the head of a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.
You should preserve the original relative order of the nodes in each of the two partitions.

### LRU Cache

### Reverse Nodes in k-Group

---

## (9) Binary Trees

- Preorder traversal: visit node, then left, then right
- Inorder traversal: visit left, then node, then right
- Postorder traversal: visit left, then right, then node
- Level-order traversal: by level

### Maximum Depth of Binary Tree

- Given the root of a binary tree, return its maximum depth.
- A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
- _Strategy_: recursive -- return max of max depth of left and right, plus one

### Same Tree

- Given the roots of two binary trees p and q, write a function to check if they are the same or not.
- _Strategy_: recursive -- check equality of root and left and right

### Invert Binary Tree

- Given the root of a binary tree, invert the tree, and return its root.
- _Strategy_: recursive -- swap right and left, and then invert right and left.

### Symmetric Tree

- Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).
- _Strategy_: You guessed it... recursive. isMirror takes two nodes.

### Count Complete Tree Nodes

- Given the root of a complete binary tree, return the number of the nodes in the tree.
- According to Wikipedia, every level, except possibly the last, is completely filled in a complete binary tree, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.
- Design an algorithm that runs in less than O(n) time complexity.
- _Strategy_: Sure, O(n) is simple, just DFS. But we can use fact that it is complete to be more clever, because this means both children are complete, and at least one is full.

### Path Sum

- Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.
- _Strategy_: yep, recursion again. Check if left or right has sum of (target - value).

### Construct Binary Tree from Preorder and Inorder Traversal

### Construct Binary Tree from Inorder and Postorder Traversal

### Populating Next Right Pointers in Each Node II

### Flatten Binary Tree to Linked List

### Sum Root to Leaf Numbers

### Binary Tree Maximum Path Sum

### Binary Search Tree Iterator

### Lowest Common Ancestor of a Binary Tree

- Strategy: a bit tricky, but use recursion again..

---

## (9.1) Binary Trees BFS

### Average of Levels in Binary Tree

- Given the root of a binary tree, return the average value of the nodes on each level in the form of an array. Answers within 10-5 of the actual answer will be accepted.
- _Strategy_: basically just level-order traversal, right? Not sure why this is "easy" and that is "medium"..

### Binary Tree Right Side View

### Binary Tree Level Order Traversal

- _Strategy_: use a queue, populate with children from current level

### Binary Tree Zigzag Level Order Traversal

---

## (9.2) Binary Search Trees

- Left contains values less than root; right contains values greater than root. (this is true of nodes AND subtrees)

### Minimum Absolute Difference in BST

- Given the root of a Binary Search Tree (BST), return the minimum absolute difference between the values of any two different nodes in the tree.
- _Strategy_: Just go through inorder, which is sorted for a BST. The minimum difference will be between two consecutive values that you encounter.

### Kth Smallest Element in a BST

### Validate Binary Search Tree

---

## (10) Graphs

- Graphs can be weighted or not, and they can be directed or not

### Number of Islands

- Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.
- Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
  ]
- Output: 3
- _Strategy_: iterate through cells and dfs (or bfs) on each one, which recursively turns cell and its neighbors to 0. Count up number of times you do so.

### Max Area Island (\*)

- Very similar to previous problem: return max area of any island.
- _Strategy_: use dfs, which sets cell to 0, adds 1 to count, and then adds count for each of 4 directions and returns count.

### Count Connected Components (\*)

- Similar strategy to previous.

### Surrounded Regions

- You are given an m x n matrix board containing letters 'X' and 'O', capture regions that are surrounded
- Input: board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]
- Output: [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]
- _Strategy_: Idea is to start with safe O's on the border, and dfs (or bfs) out from them. Mark as "S", then set all remaining O's to "X" to mark them captured. (Then flip "S" back to "O")

### Clone Graph

- Ugh,... we should do, not long.

### Evaluate Division

- Oh, super interesting.

### Course Schedule

- There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.
- For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
- Return true if you can finish all courses. Otherwise, return false.
- Hint 1: "This problem is equivalent to finding if a cycle exists in a directed graph. If a cycle exists, no topological ordering exists and therefore it will be impossible to take all courses."

### Course Schedule II

- Very similar to previous problem: return the order of courses to take. So, topological sort.
- _Strategy_: Keep track of map (for each node, array of dependent nodes), and invert map (for each node, number of nodes it depends on)
- Queue contains nodes that depend on 0 other nodes. Iterate through, removing nodes one by one, decrementing the source count for each dependent node as you go.
- This is called "Kahn's algorithm".

---

## (11) Graphs: BFS

- Remember: any time you need a _minimal distance_, you probably want BFS.

### Snakes and Ladders

### Minimum Genetic Mutation

- Looks identical to "Word Ladder".

### Word Ladder

- Given start and end word, and word list, return smallest number of steps needed to reach target word (changing one letter at a time).
- _Strategy_: fairly intuitive: queue contains nodes with word and level; add all possible transformed words to queue, for each word in queue. Then delete them from word list, to avoid infinite loops.

### Rotting Oranges (\*)

- Tricky one

### Pacific Atlantic (\*)

### Walls and Gates (\*)

---

## (11.5) Graphs: Advanced

### Minimum Cost to Connect Points

- Involves Minimal Spanning Tree, Kruskal's algorithm, cycle-detection (with union-find)

### Network Delay

- Uses Dijkstra's algorithm, whose point is to find the shortest path from a source vertex to every other vertex in a weighted graph.
- Keep two sets (added and not-added), initialize all distance except source as Infinity, then choose minimal distance vertex, and update all its neighbors' distances.

### Swim in Rising Water

- Basically an extension/application of Dijkstra's

### Strongly connected components

- Only applies to directed graphs; because "strongly" means there is a path in _both_ directions, between any two vertices in the component.
- To find SCCs in a graph, we can use algorithms like Kosaraju’s Algorithm or Tarjan’s Algorithm.

---

## (12) Trie

### Implement Trie (Prefix Tree)

### Design Add and Search Words Data Structure

### Word Search II

---

## (13) Backtracking

### Letter Combinations of a Phone Number

- Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.
- Input: digits = "23"
- Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

### Combinations

- Given two integers n and k, return all possible combinations of k numbers chosen from the range [1, n].
- Input: n = 4, k = 2
- Output: [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]

### Permutations

- Given an array nums of distinct integers, return all the possible
  permutations.
- Input: nums = [1,2,3]
- Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

### Combination Sum

- Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.
- Input: candidates = [2,3,6,7], target = 7
- Output: [[2,2,3],[7]]

### N-Queens II

- The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other. Given an integer n, return the number of distinct solutions to the n-queens puzzle.
- Input: n = 4
- Output: 2

### Generate Parentheses

- Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
- Input: n = 3
- Output: ["((()))","(()())","(())()","()(())","()()()"]

### Word Search

- Given an m x n grid of characters board and a string word, return true if word exists in the grid.
- The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.
- Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
- Output: true

### Subsets (\*)

- A classic, come on

---

## (14) Divide and Conquer

### Convert Sorted Array to Binary Search Tree

- "Easy"
- Strategy: You want to choose middle of array as root, split into left and right parts, and continue processing those, recursively.

### Sort List

- Given the head of a linked list, return the list after sorting it in ascending order.
- Cheap solution: push values out into array, sort it, push back into linked list, done.
- Strategy: Intended idea is to use divide-and-conquer merge sort.

### Construct Quad Tree

### Merge k Sorted Lists

---

## (15) Kadane's

- Only need to store max sum ending at each index, and max seen so far, as we go
- Basically a subtle improvement on DP approach to problem

### Maximum Subarray

- Given an integer array nums, find the subarray with the largest sum, and return its sum.
- Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
- Output: 6

### Maximum Sum Circular Subarray

- Given a circular integer array nums of length n, return the maximum possible sum of a non-empty subarray of nums.
- A circular array means the end of the array connects to the beginning of the array. Formally, the next element of nums[i] is nums[(i + 1) % n] and the previous element of nums[i] is nums[(i - 1 + n) % n].
- Input: nums = [5,-3,5]
- Output: 10

### Maximum Product Subarray (\*)

- Presumably the same idea..

---

## (16) Binary Search

### Search Insert Position

- Given a sorted list of ints and a target, find index of target, or index where it should be inserted, in O(log n) runtime.
- Standard binary search: tricky part is the insert index.

### Search a 2D Matrix

- Given a matrix (with elements in increasing order), determine whether a target exists in the matrix in O(log n\*m) runtime.

### Find Peak Element

- Given an array of ints, find and return any "peak" element (that is strictly greater than both neighbors).
- Tricky one, not easy to see why BS applies.

### Search in Rotated Sorted Array

- "Rotated" array is one that has been wrapped around a "pivot" point, like [1, 2, 3] -> [2, 3, 1].

### Find First and Last Position of Element in Sorted Array

- I guess use BS twice, to find first and last position of element.

### Find Minimum in Rotated Sorted Array

### Median of Two Sorted Arrays

- hard

### Koko Eating Bananas (\*)

---

## (17) Heaps

- A Heap is a complete binary tree data structure that satisfies the heap property:
- (A "complete" binary tree means all levels are filled except perhaps last, which is filled left to right)
- for every node, the value of its children is greater than or equal to its own value.
- (Note: can also do max-heap, where value of each node's children is LESS than or equal to its own value)
- Heaps are usually used to implement priority queues, where the smallest (or largest) element is always at the root of the tree.
- Heaps are used in Prim's, Dijkstra's, A\*, heapsort..

### Kth Largest Element in an Array

Given an integer array nums and an integer k, return the kth largest element in the array.
Note that it is the kth largest element in the sorted order, not the kth distinct element.
Can you solve it without sorting?

### Find K Pairs with Smallest Sums

You are given two integer arrays nums1 and nums2 sorted in non-decreasing order and an integer k.
Define a pair (u, v) which consists of one element from the first array and one element from the second array.
Return the k pairs (u1, v1), (u2, v2), ..., (uk, vk) with the smallest sums.

### IPO

### Find Median from Data Stream

---

## (18) Bit Manipulation

### Add Binary

- Given two binary strings a and b, return their sum as a binary string.
- Input: a = "1010", b = "1011"
- Output: "10101"

- Huh, do they want a carry-based algo? -->Yup.

### Reverse Bits

- Reverse bits of a given 32 bits unsigned integer.
- Input: n = 00000010100101000001111010011100
- Output: 964176192 (00111001011110000010100101000000)

- Huh, we just used toString(2), reverse and parse as decimal (parseInt(x, 2))... (just have to pad start with 0s)

### Number of 1 Bits

- Given a positive integer n, write a function that returns the number of set bits in its binary representation (also known as the Hamming weight).
- Input: n = 11
- Output: 3

- Yeah, toString(2) saves the day again
- Ah cool, you can iterate through by shifting one to the right, and then checking & 1 to see if final bit is 1 (and keep track of sum)

### Single Number

- Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
- You must implement a solution with a linear runtime complexity and use only constant extra space.

### Single Number II

- Given an integer array nums where every element appears three times except for one, which appears exactly once. Find the single element and return it.
- You must implement a solution with a linear runtime complexity and use only constant extra space.

### Bitwise AND of Numbers Range

- Given two integers left and right that represent the range [left, right], return the bitwise AND of all numbers in this range, inclusive.

---

## (19) Math

### Palindrome Number

- Is the number a palindrome?
- _Strategy_: Yep, walk through string up to middle and check if equal to mirror character.

### Plus One

- Given a large number represented as an array of digits, increment the large integer by one and return the resulting array of digits.
- _Strategy_: Yep, what you'd think, keep track of a carry and pop from input while unshifting onto result.

### Sqrt(x)

- Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.
- _Strategy_: Yep, iterate through integers, test their square against input.

### Factorial Trailing Zeroes

- Given an integer n, return the number of trailing zeroes in n!.

### Pow(x, n)

- Implement pow(x, n), which calculates x raised to the power n (i.e., x ^ n).

### Max Points on a Line

- Hard: Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane, return the maximum number of points that lie on the same straight line.

### GCD (\*)

- Just memorize this
- Same with LCM

---

## (20) DP

### Climbing Stairs

- You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
- Input: n = 3
- Output: 3

### Climbing Stairs (Min Cost) (\*)

### House Robber

- Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police. (i.e. without visiting consecutive houses)
- Input: nums = [1,2,3,1]
- Output: 4

### Word Break

- Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.
- Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
- Output: false

### Coin Change

- You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.
- Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.
- Input: coins = [1,2,5], amount = 11
- Output: 3

### Coins: Number of Ways (\*)

// Say we have denominations [1, 2, 5] and we want to make 11.
// Well we need to know the number of ways to make (11-1), (11-2), and (11-5).
// That's pretty much it.
// "What if we already knew the answer to the subproblems?"

### Longest Increasing Subsequence

- Given an integer array nums, return the length of the longest strictly increasing
  subsequence.
- Input: nums = [10,9,2,5,3,7,101,18]
- Output: 4

---

## (21) 2d DP

### Unique Paths (\*)

// Right, the prime example.
// Key insight is that if you just go in standard order through cells, since they only can move right and down,
// You are guaranteed to always have evaluated top and left of a cell before you get to it.
// So you can just add those up.

// Yeah haha.
// Call DP the "Wishful Thinking" approach.
// Just imagine if we had all the answers for smaller subproblems.
// Could we then solve the current problem?

### Triangle

Given a triangle array, return the minimum path sum from top to bottom.
For each step, you may move to an adjacent number of the row below. More formally, if you are on index i on the current row, you may move to either index i or index i + 1 on the next row.

### Minimum Path Sum

Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.
Note: You can only move either down or right at any point in time.

### Unique Paths II

You are given an m x n integer array grid. There is a robot initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

An obstacle and space are marked as 1 or 0 respectively in grid. A path that the robot takes cannot include any square that is an obstacle.

Return the number of possible unique paths that the robot can take to reach the bottom-right corner.

### Longest Palindromic Substring

Return the longest palindromic substring in a given string.

### Interleaving String

Given strings s1, s2, and s3, find whether s3 is formed by an interleaving of s1 and s2.

### Edit Distance

Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.

You have the following three operations permitted on a word:
Insert a character
Delete a character
Replace a character

### Maximal Square

Given an m x n binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

### Best Time to Buy and Sell Stock III

### Best Time to Buy and Sell Stock IV

---

Advanced/Other:

- Floyd Warshall
- Prim vs Kruskal
- Johnson's
- Articulation points (cut vertices) in a graph
- Bridges in a graph
- subset sum (dp)
- knapsack (dp)
- min partition (dp)
- quicksort
- mergesort
- countsort
- heapsort
- sieve of erasthenes
- prime factorization
- modular arithmetic
- totient function
- modular exponentiation
- modular multiplicative inverses
- catalan numbers
- convex hull
- matrix exponentiation
