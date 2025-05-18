// Question

// Problem Description

// Given a sorted array A containing N integers both positive and negative.
// You need to create another array containing the squares of all the elements in A and return it in non-decreasing order.
// Try to this in O(N) time.

// Problem Constraints
// 1 <= N <= 105.
// -103 <= A[i] <= 103

// Input Format
// First and only argument is an integer array A.

// Output Format
// Return a integer array as described in the problem above.

// Example Input
// Input 1:
//  A = [-6, -3, -1, 2, 4, 5]
// Input 2:
//  A = [-5, -4, -2, 0, 1]

// Example Output
// Output 1:
//  [1, 4, 9, 16, 25, 36]
// Output 2:
//  [0, 1, 4, 16, 25]

// -------------------------------------------------------------------------

// Answer (O(N) - Commented out code shows the problem solved with reversing array at last (Kind of less optimized but O(N)))

function solve(A) {
    if (A.length === 0) {
        return [];
    } else if (A.length === 1) {
        return [A[0] * A[0]];
    }
    
    let i = 0, j = (A.length - 1), pos = (A.length - 1), arr = [], swap = null;
    
    while(i <= j) {
        if ((A[i] * A[i]) > (A[j] * A[j])) {
            // arr.push(A[i] * A[i]);
            arr[pos] = A[i] * A[i];
            i++;
            pos--;
        } else if ((A[i] * A[i]) < (A[j] * A[j])) {
            // arr.push(A[j] * A[j]);
            arr[pos] = A[j] * A[j];
            j--;
            pos--;
        } else {
            // arr.push(A[i] * A[i]);
            arr[pos] = A[i] * A[i];
            pos--;
            // (i !== j) && arr.push(A[i] * A[i]);
            if (i !== j) {
                arr[pos] = A[j] * A[j];
                pos--;
            }
            i++;
            j--;
        }
    }
    
    // for(let k = 0; k < Math.floor(arr.length / 2); k++) {
    //     swap = arr[k];
    //     arr[k] = arr[arr.length - 1 - k];
    //     arr[arr.length - 1 - k] = swap;
    // }
    
    return arr;
}