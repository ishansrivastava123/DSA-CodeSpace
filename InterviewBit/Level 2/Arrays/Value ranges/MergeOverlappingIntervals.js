// Question
// Given a collection of intervals, merge all overlapping intervals.

// Problem Constraints
// 1 <= Total number of intervals <= 100000.

// Input Format
// First argument is a list of intervals.

// Output Format
// Return the sorted list of intervals after merging all the overlapping intervals.

// Example Input
// Input 1:

// [1,3],[2,6],[8,10],[15,18]

// Example Output
// Output 1:

// [1,6],[8,10],[15,18]

// Example Explanation
// Explanation 1:

// Merge intervals [1,3] and [2,6] -> [1,6].
// so, the required answer after merging is [1,6],[8,10],[15,18].
// No more overlapping intervals present.

// ------------------------------------------------

// Answer
function mergeOverlapping(A){
    let i = 0, output = [];
    A.sort((a, b) => a[0] - b[0]);
    while((i < (A.length-1)) && (A[i][1] < A[i+1][0])) {
        output.push(A[i]);
        i++;
    }        
    
    let lower = A[i][0], upper = A[i][1];
    while((i < A.length) && (upper >= A[i][0])) {
        upper = Math.max(A[i][1], upper);
        i++;
    }
    output.push([lower, upper]);
    
    while(i < A.length) {
        output.push(A[i]);
        i++;
    }
    
    return output;
}