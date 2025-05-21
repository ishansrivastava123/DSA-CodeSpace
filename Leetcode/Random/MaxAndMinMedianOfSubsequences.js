// Question (https://i.redd.it/ruvqw2xisl1f1.png)

// 1. Code Question 1
// A new Amazon intern encountered a challenging task. Currently, the intern has n integers, where the value of the ith element is represented by the array element values[i].
// The intern is curious to play with arrays and subsequences and thus asks you to join him.
// Given n integer, array values, and an integer k, the intern needs to find the maximum and minimum median overall subsequences of length k.
// Example:
// Given n=3, values = [1, 2, 3], and k = 2.
// Subsequences of length k
// 2
// [1,2]
// [1,3]
// [2, 3]
// median
// 1
// 1
// 2
// Here, the maximum median present is 2 and the minimum median in the subsequence present is 1.
// Function Description
// Complete the function medians in the editor below.
// medians has the following parameter(s):
// int values[n]: the value of integers.
// int k: the given integer
// Returns
// int[]: the maximum and minimum overall subsequences of length k in the form [maximum median, minimum median].
// Constraints
// • 1≤ n ≤10^5
// • 0≤ values[i]≤ 10^9
// •1≤k≤n

// ------------------------------------------------

// Solution (O(N log N))
function subsequence(A, k) {
    if ((A.length === 0) || (k === 0)) {
        return [];
    } else if (A.length === 1) {
        return [A[0], A[0]];
    } else if (k >= A.length) {
        return [A[Math.floor((A.length - 1) / 2)], A[Math.floor((A.length - 1) / 2)]];
    }
    
    A.sort((a,b) => a-b);
    
    if (k === 1) {
        return [A[A.length - 1], A[0]];
    }
    
    const i = Math.floor((k - 1) / 2);
    return [A[A.length - (((k % 2) === 0) ? 2 : 1) - i], A[i]];
}