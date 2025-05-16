// Question

// Given an integer array A of size N.
// You have to pick exactly B elements from either left or right end of the array A to get the maximum sum.
// Find and return this maximum possible sum.
// NOTE: Suppose B = 4 and array A contains 10 elements then
// You can pick the first four elements or can pick the last four elements or can pick 1 from the front and 3 from the back etc. you need to return the maximum possible sum of elements you can pick.

// Problem Constraints
// 1 <= N <= 105
// 1 <= B <= N
// -103 <= A[i] <= 103

// Input Format
// First argument is an integer array A.
// Second argument is an integer B.

// Output Format
// Return an integer denoting the maximum possible sum of elements you picked.

// Example Input
// Input 1:

//  A = [5, -2, 3 , 1, 2]
//  B = 3

// Input 2:
//  A = [1, 2]
//  B = 1

// Example Output
// Output 1:
//  8
// Output 2:
//  2

// Example Explanation
// Explanation 1:
//  Pick element 5 from front and element (1, 2) from back so we get 5 + 1 + 2 = 8
// Explanation 2:
//  Pick element 2 from end as this is the maximum we can get

// -------------------------------------------------------------------------

// Answer (O(log N))
function solve(A, B) {
    if ((A.length === 0) || (B === 0)) {
        return 0;
    } else if (B >= A.length) {
        let i = 0, c = 0;
        while(i < A.length) {
            c += A[i];
            i++;
        }
        return c;
    }
    
    let i = 0, j = 0, max = 0, firstArr = [], secondArr = [], temp;
    
    while(i < B) {
        firstArr.push(A[i]);
        secondArr.unshift(A[A.length - 1 - i]);
        max += A[i];
        i++;
    }
    
    temp = max;
    
    while(j <= B) {
        temp = temp - (firstArr[B - j] || 0) + (secondArr[B - j] || 0);
        max = Math.max(max, temp);
        j++;
    }
    
    return max;
}