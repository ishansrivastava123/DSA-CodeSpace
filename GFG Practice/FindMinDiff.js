// Question

// Chocolate Distribution Problem
// Given an array arr[] of n integers where arr[i] represents the number of chocolates in ith packet. Each packet can have a variable number of chocolates. There are m students, the task is to distribute chocolate packets such that: 

// Each student gets exactly one packet.
// The difference between the maximum and minimum number of chocolates in the packets given to the students is minimized.
// Examples:

// Input: arr[] = {7, 3, 2, 4, 9, 12, 56}, m = 3 
// Output: 2 
// Explanation: If we distribute chocolate packets {3, 2, 4}, we will get the minimum difference, that is 2. 

// Input: arr[] = {7, 3, 2, 4, 9, 12, 56}, m = 5 
// Output: 7
// Explanation: If we distribute chocolate packets {3, 2, 4, 9, 7}, we will get the minimum difference, that is 9 - 2 = 7. 

// -------------------------------------------------------------------------

// Answer (O(N))
function findMinDiff(arr, m) {
    let obj = {}, i = 0, output = [];
    while(i < arr.length) {
        obj[arr[i]] = (obj[arr[i]] || 0) + 1;
        i++;
    }
    
    i = 0;
    console.log(obj);
    
    for(let key in obj) {
        if (i === m) {
            return output;
        }
        
        if (obj[key] > 1) {
            const times = Math.min((m - i), obj[key]);
            i += times;
            for(let j = 0; j < times; j++) {
                output.push(+key);
            }
        } else {
            i++;
            output.push(+key);
        }
    }
    
    return output;
}