// Given a string of characters, partition the string into as many parts as possible so that each letter appears in at most one part.
// Return a list of integers representing the size of these parts.

// IDEA: We can use a greedy approach to solve this problem.
// We can iterate through the string and keep track of the last index of each character.
// Then as we loop through, we know we have to partition the string at the last index of the current character.
// Or, really, the MAX of that and whatever our current "last" is.
// Because we have to include ALL (occurrences of all) the characters in between.
// And that's the best we could possibly do.
