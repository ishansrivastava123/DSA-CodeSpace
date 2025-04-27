// Question
// Given an array A of size N. You need to find the sum of Maximum and Minimum element in the given array.

// NOTE: You should make minimum number of comparisons.

// Problem Constraints
// 1 <= N <= 105

// -109 <= A[i] <= 109

// Input Format
// First and only argument is an integer array A of size N.

// Output Format
// Return an integer denoting the sum Maximum and Minimum element in the given array.

// Example Input
// Input 1:

// A = [-2, 1, -4, 5, 3]
// Input 2:

// A = [1, 3, 4, 1]


// Example Output
// Output 1:

// 1
// Output 2:

// 5

// Example Explanation
// Explanation 1:

// Maximum Element is 5 and Minimum element is -4. (5 + (-4)) = 1. 
// Explanation 2:

// Maximum Element is 4 and Minimum element is 1. (4 + 1) = 5.

// ------------------------------------------------

// My Answer (2(n-1) comparisons)
solve : function(A){
    if ((A.length < 1) || (A.length > Math.pow(10, 5))) {
        return 0;
    }
    
    let max = A[0], min = A[0];
    
    for(let i = 1; i < A.length; i++) {
        if ((A[i] < (-1 * Math.pow(10, 9))) || (A[i] > Math.pow(10, 9))) {
            return 0;
        }
        
        if (A[i] < min) {
            min = A[i];
        }
        
        if (A[i] > max) {
            max = A[i];
        }
    }
    
    return (min + max);
}

// ChatGPT Answer (1.5n)
function solve(A) {
    const n = A.length;
    if (n < 1 || n > 1e5) return 0;

    for (let i = 0; i < n; i++) {
        if (A[i] < -1e9 || A[i] > 1e9) return 0;
    }

    let min, max;
    let i = 0;

    if (n % 2 === 0) {
        // Compare first two to initialize
        if (A[0] < A[1]) {
            min = A[0];
            max = A[1];
        } else {
            min = A[1];
            max = A[0];
        }
        i = 2;
    } else {
        min = max = A[0];
        i = 1;
    }

    while (i < n - 1) {
        let a = A[i], b = A[i + 1];

        if (a < b) {
            if (a < min) min = a;
            if (b > max) max = b;
        } else {
            if (b < min) min = b;
            if (a > max) max = a;
        }

        i += 2;
    }

    return min + max;
}
