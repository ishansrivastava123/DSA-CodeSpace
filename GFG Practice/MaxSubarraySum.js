// Question

// Maximum Subarray Sum - Kadane's Algorithm
// Given an integer array arr[], find the subarray (containing at least one element) which has the maximum possible sum, and return that sum.
// Note: A subarray is a continuous part of an array.

// Examples:

// Input: arr[] = [2, 3, -8, 7, -1, 2, 3]
// Output: 11
// Explanation: The subarray [7, -1, 2, 3] has the largest sum 11.

// Input: arr[] = [-2, -4]
// Output: -2
// Explanation: The subarray [-2] has the largest sum -2.

// Input: arr[] = [5, 4, 1, 7, 8]
// Output: 25
// Explanation: The subarray [5, 4, 1, 7, 8] has the largest sum 25.

// -------------------------------------------------------------------------

// Answer (O(N))

function maxSubarraySum(arr) {
    let localSum = arr[0], maxSum = arr[0];
    for(let i = 1; i < arr.length; i++) {
        localSum = Math.max(arr[i], localSum + arr[i]);
        maxSum = Math.max(localSum, maxSum);
    }
    return maxSum;
}