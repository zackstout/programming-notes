#include <iostream>
// #include <string>
// #include <bits/stdc++.h>

#include <vector>
#include <queue>
#include <stack>
#include <set>
#include <map>
#include <unordered_set>
#include <unordered_map>
// Huh, it doesn't like this one... maybe get it just from queue?
// #include <priority_queue>
#include <deque>

// NOTE: "&" has a few meanings
// NOTE: unordered_set and unordered_map use Hash table.

typedef long long ll;
#define PB push_back;

using namespace std;

int main()
{
    int n, k;
    cin >> n >> k;

    long long x = 1;
    double y = 2;

    // ========================================================
    vector<int> v;
    v.push_back(3);
    v.push_back(2);
    v.push_back(5);

    cout << v.back();

    cout << v[0];

    cout << "v:" << "\n";
    for (auto x : v)
    {
        cout << x << "\n";
    }

    vector<int> v2 = {2, 3, 1};

    vector<int> v3(10);

    vector<int> v4(10, 5);

    cout << "v4:" << "\n";
    for (auto x : v4)
    {
        cout << x << "\n";
    }

    sort(v.begin(), v.end());
    reverse(v.begin(), v.end());

    // Doesn't like this one..
    // random_shuffle(v.begin(), v.end());

    // ========================================================

    string str = "monkey";
    string str2 = str + str;
    // NOTE: Needs to be single quotes for this to work???
    str2[2] = 'k';
    string str3 = str2.substr(3, 5);

    cout << "str3: " << "\n"
         << str3 << "\n";
    // ========================================================

    set<int> s;
    s.insert(3);
    s.insert(3);
    s.insert(2);

    cout << "3 count:" << s.count(3) << "\n";
    cout << "4 count:" << s.count(4) << "\n";

    s.erase(3);
    cout << "3 count now:" << s.count(3);

    for (auto x : s)
    {
        cout << "loop set" << x << "\n";
    }

    // Iterators are pointers -- to get the element, use "*" -- use begin and end for smallest and largest element of set
    for (auto it = s.begin(); it != s.end(); it++)
    {
        cout << *it << "\n";
    }

    // begin, end, find, lower_bound, upper_bound
    // all of them return iterators that point to elements.
    // note: only available for set, NOT for unordered_set

    // ========================================================

    multiset<int> ms;
    ms.insert(4);
    ms.insert(4);
    cout << "multiset" << ms.count(4) << "\n";
    // ========================================================

    map<string, int> m;
    m["monkey"] = 4;
    m["banana"] = 3;
    m["harpsichord"] = 9;
    cout << m["banana"] << "\n";

    if (m.count("aybabtu"))
    {
        // key exists
    }

    // Use of "first" and "second" for "key" and "value"... huh
    for (auto x : m)
    {
        cout << x.first << " " << x.second << "\n";
    }

    // ========================================================

    // BITSET
    // array of only 0s and 1s -- note it is represented backwards

    // (1 << i) means "0000000001" shifted to the left i times. so the "1" appears i units to the left.

    // ========================================================

    // DEQUE
    // vector that adds push_front and pop_front

    // ========================================================

    // STACK
    // add and remove final element in constant time (only element you can access)

    // ========================================================

    // QUEUE
    // add element to end and remove from start in constant time (only els you can access)

    // ========================================================

    // PRIORITY QUEUE
    // add element, and retrieve/remove largest or smallest element

    // Supports finding/removing the smallest element instead:
    // priority_queue<int,vector<int>,greater<int>> q;

    // ========================================================

    // POLICY-BASED
    // indexed_set ?? need to add extra header lines to make available

    // ========================================================

    // This declares an ARRAY of vectors, the array is size 10.
    vector<int> adj[10];

    cout << n + k << " is the sum! Hello world";

    return 0;
}

// Ok sweet!!!! Use following 2 to compile and execute!
// Setting the version of c++ fixes warnings around "auto" and errors around initializing a vector.
// g++ helloWorld.cpp -std=c++11
// ./a.out

// Generate subsets w/ bits technique:

// for (int b = 0; b < (1<<n); b++) {
// vector<int> subset;
// for (int i = 0; i < n; i++) {
// if (b&(1<<i)) subset.push_back(i);
// }
// }

// Note can also use the classic BACKTRACKING:

// void search(int k) {
// if (k == n) {
// // process subset
// } else {
// search(k+1);
// subset.push_back(k);
// search(k+1);
// subset.pop_back();
// }
// }

// Try to prune the search space with backtracking to know when a candidate is not possibly going to work.
// Ex: solving a maze.

// A GREEDY algorithm never takes back its choices, but directly constructs the final solution.
// In general it can be difficult to argue that greedy algos will work.
// Ex: make a sum from given denominations of coins in minimum amount of coins.
// Ex: scheduling, always choose event that ends as early as possible.
// Ex: tasks with deadlines, always do shorter duration task first.
// Ex: Huffman coding to compress a string (where no code can be a prefix of another code)
// This last one is rather beautiful and astonishing

// DP: Yep the familiar idea that it is usefl to think of them in terms of recursion, but often easier to write iteratively.
// Ex: min num of coins needed to reach given sum
// Ex: num ways to make given sum from set of coins

// Edit distance, counting tilings, counting paths, longest increasing subsequence

// 5 - Complete search
// 6 - Greedy algorithms
// 7 - Dynamic programming
// 8 - Amortized analysis (Two pointers)
// 9 - Range queries (Prefix sum tables)
// 10 - Bit manipulation

// BFS

// queue<int> q;
// bool visited[N];
// int distance[N];

// void bfs(int x){
// visited[x] = true;
// distance[x] = 0;
// q.push(x);
// while (!q.empty()) {
// int s = q.front(); q.pop();
// // process node s
// for (auto u : adj[s]) {
// if (visited[u]) continue;
// visited[u] = true;
// distance[u] = distance[s]+1;
// q.push(u);
// }
// }
// }

// DFS

// vector<int> adj[N];
// bool visited[N];
// void dfs(int s) {
// if (visited[s]) return;
// visited[s] = true;
// // process node s
// for (auto u: adj[s]) {
// dfs(u);
// }
// }

// https://cses.fi/book/book.pdf