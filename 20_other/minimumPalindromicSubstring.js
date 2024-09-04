/**
 * This post is for learner wanna practice DP.
The basic idea is, if we wanna say "aba" is palindromic, then we need to firstly confirm that "b" is palindromic, then we also need to check if "a"(the first a) = "a" (the second a).

M is a 2-d array which stores boolean values.
M[i][j] indicates if string[i.....j] is palindromic.
So base cases are:
M[i][i] is true.
M[i][i + 1] = (s[i] == s[i + 1]);
recurrence relation is :
M[i][j] = (s[i] == s[j] AND M[i + 1][j - 1]);
For the implementation of recurrence relation, one idea is you can loop through all possible symmetry axis. For each of the axis, you expand at both RHS and LHS simultaneously. This method promises that when you are determining value in M[i][j], M[i + 1][j - 1] must have the correct value.
Final answer can be found from all M[i][j] == 1 with largest (j - i).
 */
