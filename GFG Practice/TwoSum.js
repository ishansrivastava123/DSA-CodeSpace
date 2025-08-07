// Question

// Given an array arr[] of n integers and a target value, check if there exists a pair whose sum equals the target. This is a variation of the 2Sum problem.

// Examples: 

// Input: arr[] = [0, -1, 2, -3, 1], target = -2
// Output: true
// Explanation: There is a pair (1, -3) with the sum equal to given target, 1 + (-3) = -2.

// Input: arr[] = [1, -2, 1, 0, 5], target = 0
// Output: false
// Explanation: There is no pair with sum equals to given target.

// -------------------------------------------------------------------------

// Answer (O(N))

function twoSum(arr, target) {
    let obj = {}, i = 0;

    while(i < arr.length) {
        obj[arr[i]] = i;
        i++;
    }
    
    for(let key in obj) {
        if (((target - (+key)) in obj) && (+key !== target / 2)) {
            console.log(key);
            return true;
        }
    }
    
    return false;
}