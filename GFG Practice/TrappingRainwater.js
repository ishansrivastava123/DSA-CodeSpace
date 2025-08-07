// Question

// Trapping Rain Water Problem - Tutorial with Illustrations
// Trapping Rainwater Problem states that given an array of n non-negative integers arr[] representing an elevation map where the width of each bar is 1, compute how much water it can trap after rain.

// Examples:  

// Input: arr[] = [3, 0, 1, 0, 4, 0, 2]
// Output: 10
// Explanation: The expected rainwater to be trapped is shown in the above image.

// Input: arr[] = [3, 0, 2, 0, 4]
// Output: 7
// Explanation: We trap 0 + 3 + 1 + 3 + 0 = 7 units.

// Input: arr[] = [1, 2, 3, 4]
// Output: 0
// Explanation: We cannot trap water as there is no height bound on both sides

// -------------------------------------------------------------------------

// Answer (O(NxN))
function trappingRainwater(arr) {
    let sum = 0;
    for(let i = 1; i < arr.length - 1; i++) {
        let left = arr[i];
        for(let j = 0; j < i; j++) {
            left = Math.max(left, arr[j]);
        }
        
        let right = arr[i];
        for(let k = (i + 1); k < arr.length; k++) {
            right = Math.max(right, arr[k]);
        }
        
        sum += Math.min(left, right) - arr[i];
    }
    
    return sum;
}