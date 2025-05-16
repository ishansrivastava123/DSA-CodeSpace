// Question
// You are given an integer array A.
// You have to find the number of occurrences of each number.
// Return an array containing only the occurrences with the smallest value's occurrence first.
// For example, A = [4, 3, 3], you have to return an array [2, 1], where 2 is the number of occurrences for element 3, 
// and 1 is the number of occurrences for element 4. But, 2 comes first because 3 is smaller than 4.

// Problem Constraints
// 1 <= |A| <= 105
// 1 <= Ai <= 109

// Input Format
// The first argument is the integer array A.

// Output Format
// Return an integer array denoting the occurrences of each number.

// Example Input
// Input 1:
// A = [1, 2, 3]
// Input 2:
// A = [4, 3, 3]

// Example Output
// Output 1:
// [1, 1, 1]
// Output 2:
// [2, 1]

// Example Explanation
// Explanation 1:
// All the elements occur once, so the resultant array should be [1, 1, 1].
// Explanation 2:
// Explained in the description above.

// -------------------------------------------------------------------------

// Answer (O(log N))
function findOccurrences(A) {
    if (A.length === 0) {
        return [];
    } else if (A.length === 1) {
        return [1];
    }
    
    let obj = {}, i = 0;
    
    while(i < A.length) {
        obj[A[i]] = (obj[A[i]] || 0) + 1;
        i++;
    }
    
    let objArr = Object.entries(obj), valueArr = [], j = 0;
    objArr.sort((a,b) => a[0]-b[0]);
    
    while(j < objArr.length) {
        valueArr.push(objArr[j][1]);
        j++;
    }
    
    return valueArr;
}