// Question (Not understood completely)
// Given a set of non-overlapping intervals and a new interval.

// Insert the new interval into the set of intervals (merge if necessary).

// You may assume that the intervals were initially sorted according to their start times.
// Note: Make sure the returned intervals are also sorted.

// Problem Constraints
// 0 <= |intervals| <= 106
// 1 <= intervalsi.start < intervalsi.end <= 109
// 1 <= newInterval.start < newInteval.end <= 109

// Input Format
// The First argument is an array of Intervals.
// The second argument is the new Interval.

// Output Format
// Return the array of merged intervals.

// Example Input
// Input 1:
// Intervals = [[1,3],[6,9]]
// newInterval = [2,5]
// Input 2:
// Intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]]
// newInterval = [4,9]

// Example Output
// Output 1:
// [[1,5],[6,9]]
// Output 2:
// [1,2],[3,10],[12,16]

// Example Explanation
// Explanation 1:
// Given intervals [1,3],[6,9] insert and merge [2,5] would result in [1,5],[6,9].
// Explanation 2:
// Given [1,2],[3,5],[6,7],[8,10],[12,16], insert and merge [4,9] would result in [1,2],[3,10],[12,16].
// This is because the new interval [4,9] overlaps with [3,5],[6,7],[8,10].

// ------------------------------------------------

// Answer
function solve(intervals, new_interval) {
    let i = 0, output = [];
    const lower = Math.min(new_interval[0], new_interval[1]);
    const upper = Math.max(new_interval[0], new_interval[1]);
    
    while((i < intervals.length) && (intervals[i][1] < lower)) {
        output.push(intervals[i]);
        i++;
    }
    
    let newLower = lower, newUpper = upper;
    while((i < intervals.length) && (intervals[i][0] <= upper)) {
        newLower = Math.min(intervals[i][0], newLower);
        newUpper = Math.max(intervals[i][1], newUpper);
        i++;
    }
    
    output.push([newLower, newUpper]);
    
    while(i < intervals.length) {
        output.push(intervals[i]);
        i++;
    }
    
    return output;
},