// Question

// You are given an array of 0s and 1s in random order. Segregate 0s on left side and 1s on right side of the array [Basically you have to sort the array]. Traverse array only once. 

// Problem Constraints
// 1<=|A|<=1e6

// Input Format
// First argument is array of integers consisting of 0's and 1's only.

// Output Format
// Return a sorted array.

// Example Input
// Input 1:
// a=[0 1 0]
// Input 2:
// A=[1 1 0 ]

// Example Output
// Ouput 1:
// [0 0 1]
// Ouput 2:
// [0 1 1]

// Example Explanation
// Explanation 1:
//  above is sorted array.
// Explanation 2:
// sort the array.

// Answer - 1 (O(N))
function solve(A) {
    let count = 0, i = 0, j = 0;
    
    while (i < A.length) {
        if (A[i] == 0) {
            count++;
        }
        i++;
    }
    
    while (j < A.length) {
        if (count > j) {
            A[j] = 0;
        } else {
            A[j] = 1;
        }
        j++;
    }
    
    return A;
}

// Answer - 2 (O(N))
function solve(A) {
    if (A.length === 0) {
        return 0;
    } else if (A.length === 1) {
        return A[0];
    }
    
    let zeroArr = [], oneArr = [], i = 0;
    while(i < A.length) {
        if (A[i] == 0) {
            zeroArr.push(A[i]);
        } else {
            oneArr.push(A[i]);
        }
        i++;
    }
    
    return zeroArr.concat(oneArr);
}