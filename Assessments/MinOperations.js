// Question

// Minimum Operations to Reach Target Sum
// Problem Statement:

// You start with an array containing a single element [1].
// You are given a target integer k.
// You can perform two types of operations:

// Increment Operation: Add 1 to the first element of the array.
// Example: [1] → [2]
// Duplicate Operation: Append a copy of the first element to the end of the array.
// Example: [2] → [2, 2] → [2, 2, 2], etc.

// Your goal is to transform the array so that the sum of its elements is at least k.
// Return the minimum number of operations (increment + duplicate) required to achieve this.

// Constraints:
// 1 <= k <= 10^9 (or any suitable upper bound depending on your environment)
// Operations can be performed in any order and any number of times.

// Example:

// Input:
// k = 15
// Output:
// 6

// Explanation:
// One sequence of operations (6 total):

// [1] → [2]             (increment)
// [2] → [3]             (increment)
// [3] → [3, 3]          (duplicate)
// [3, 3] → [3, 3, 3]    (duplicate)
// [3, 3, 3] → [3, 3, 3, 3]  (duplicate)
// [3, 3, 3, 3] → [3, 3, 3, 3, 3] (duplicate)
// Sum = 3 * 5 = 15

// Solution (O(k))
function minOperations(k) {
    if (k <= 1) {
        return 0;
    }
    
    let i = 0, output = Infinity;
    
    while((i < k) && (output >= (Math.ceil(k / (i + 1)) + i - 1))) {
        output = Math.min(output, (Math.ceil(k / (i + 1)) + i - 1));
        i++;
    }
    
    return output;
}