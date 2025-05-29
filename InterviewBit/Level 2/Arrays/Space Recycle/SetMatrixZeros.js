// Question
// Problem Description
 
// Given a matrix, A of size M x N of 0s and 1s. If an element is 0, set its entire row and column to 0.
// Note: This will be evaluated on the extra memory used. Try to minimize the space and time complexity.

// Problem Constraints
// 1 <= N, M <= 1000
// 0 <= A[i][j] <= 1

// Input Format
// The first and the only argument of input contains a 2-d integer matrix, A, of size M x N.

// Output Format
// Return a 2-d matrix that satisfies the given conditions.

// Example Input
// Input 1:
// [   [1, 0, 1],
//     [1, 1, 1], 
//     [1, 1, 1]   ]
// Input 2:
// [   [1, 0, 1],
//     [1, 1, 1],
//     [1, 0, 1]   ]

// Example Output
// Output 1:
// [   [0, 0, 0],
//     [1, 0, 1],
//     [1, 0, 1]   ]
// Output 2:
// [   [0, 0, 0],
//     [1, 0, 1],
//     [0, 0, 0]   ]

// ------------------------------------------------

// Answer (Space - O(M × N), Time - O(M × N))
function solve(arr) {
    if ((arr.length === 0) || ((arr.length === 1) && (arr[0].length === 0))) {
        return [];
    }
    
    let obj = {}, newArr = [];
    
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === 0) {
                obj[i] = j;
            }
        }
    }
    
    const values = Object.values(obj);
    
    for(let i = 0; i < arr.length; i++) {
        newArr[i] = [];
        for(let j = 0; j < arr[i].length; j++) {
            if ((i in obj) || values.includes(j)) {
                newArr[i][j] = 0;
            } else {
                newArr[i][j] = 1;
            }
        }
    }
    
    return newArr;
}

// Optimized Answer (Space - O(1), Time - O(M × N))
function solve(arr) {
    if ((arr.length === 0) || ((arr.length === 1) && (arr[0].length === 0))) {
        return [];
    }
    
    let firstRowZero = false;
    let firstColumnZero = false;
    
    for(let i = 0; i < arr[0].length; i++) {
        if (arr[0][i] === 0) {
            firstRowZero = true;
            break;
        }
    }
    
    for(let j = 0; j < arr.length; j++) {
        if (arr[j][0] === 0) {
            firstColumnZero = true;
            break;
        }
    }
    
    for(let i = 1; i < arr.length; i++) {
        for(let j = 1; j < arr[0].length; j++) {
            if (arr[i][j] === 0) {
                arr[0][j] = 0;
                arr[i][0] = 0;
            }
        }
    }
    
    for(let i = 1; i < arr.length; i++) {
        for(let j = 1; j < arr[0].length; j++) {
            if ((arr[0][j] === 0) || (arr[i][0] === 0)) {
                arr[i][j] = 0;
            }
        }
    }
    
    if (firstRowZero) {
        for(let i = 0; i < arr[0].length; i++) {
            arr[0][i] = 0;
        }
    } else if (firstColumnZero) {
        for(let j = 0; j < arr.length; j++) {
            arr[j][0] = 0;
        }
    }
    
    return arr;
}