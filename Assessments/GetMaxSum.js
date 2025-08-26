// Question
// Given an array arr of size n, split it into two non-empty subarrays at any index / (where 1 s i<n). Let the two subarrays be arr[0...i-1] and arr[i...n-1].
// Implement a function that determines the maximum possible sum of the number of distinct elements in each subarray.
// The function getMaxSum will take one input:
// int arr[n]: an array of integers
// The function should return an integer denoting the maximum possible sum of the counts of distinct integers in subarrays formed after splitting.
// Example
// n=5
// arr-[3, 1, 4, 1, 5]
// Distinct count sums for all valid split positions
// Distinct
// Split
// Left
// Right
// elements
// Index
// Subarray Subarray
// (Left+
// i
// arr[0..i-1]
// arr[i..n-1].
// Right)
// Sum
// 1
// [3]
// [1,4, 1,5]
// 1+3
// 4
// 2
// [3,1]
// [4, 1, 5]
// 2+3
// 5
// 3
// [3, 1, 4]
// [1,5]
// 3+2
// 5
// 4
// [3, 1, 4, 1]
// [5]
// 3+1
// 4

// ------------------------------------------------

// My Solution (O(N x N))
function getMaxSum(arr) {
    if (arr.length <= 1) {
        return arr.length;
    }
    
    let i = 1, obj1 = {}, obj2 = {}, localMax, max = Number.NEGATIVE_INFINITY;
    while(i < arr.length) {
        for(let j = 0; j < i; j++) {
            obj1[arr[j]] = (obj1[arr[j]] || 0) + 1;    
        }
        for(let j = i; j < arr.length; j++) {
            obj2[arr[j]] = (obj2[arr[j]] || 0) + 1;
        }
        localMax = Object.keys(obj1).length + Object.keys(obj2).length;
        max = Math.max(max, localMax);
        i++;
        obj1 = {};
        obj2 = {};
    }
    return max;
}

// My Solution (O(N))
function getMaxSum(arr) {
    if (arr.length <= 1) {
        return arr.length;
    }
    
    let i = 0, obj1 = {}, obj2 = {}, localMax, max = Number.NEGATIVE_INFINITY;
    
    while(i < arr.length) {
        obj1[arr[i]] = (obj1[arr[i]] || 0) + 1;
        i++;
    }
    
    i = 0;
    
    while(i < arr.length) {
        obj2[arr[i]] = (obj2[arr[i]] || 0) + 1;
        if (obj1[arr[i]] > 1) {
            obj1[arr[i]]--;
        } else {
            delete obj1[arr[i]];
        }
        localMax = Object.keys(obj2).length + Object.keys(obj1).length;
        max = Math.max(max, localMax);
        i++;
    }
    
    return max;
}

