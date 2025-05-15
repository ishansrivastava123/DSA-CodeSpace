// Question
// Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.

// Answer (O(N x k) - Not Optimized)
function maxSubarraySum(arr, n) {
    if (arr.length === 0) {
        return null;
    } else if (arr.length === 1) {
        return arr[0];
    }
    
    let max = (arr[0] + arr[1]), i = 0, j = 0, c = 0;
    
    if (arr.length === 2) {
        return max;
    } else if (n >= arr.length) {
        let c = 0;
        for(let i = 0; i < arr.length; i++) {
            c += arr[i];
        }
        return c;
    }
    
    while(i < (arr.length + 1 - n)) {
        j = (i + 1);
        c = arr[i];
        while((j - i) < n) {
            c += arr[j];
            j++;
        }
        if (c > max) {
            max = c;
        }
        i++;
    }
    
    return max;
}

// Answer (O(N) - Optimized)
function maxSubarraySum(arr, n) {
    if ((arr.length === 0) || (n === 0)) {
        return null;
    } else if (arr.length === 1) {
        return arr[0];
    } else if (arr.length === 2) {
        return (arr[0] + arr[1]);
    }
    
    let max = 0, i = 0, temp;
    
    if (n >= arr.length) {
        let c = 0;
        for(let i = 0; i < arr.length; i++) {
            c += arr[i];
        }
        return c;
    }
    
    while(i < n) {
        max += arr[i];
        i++;
    }
    
    i = 1;
    temp = max;
    
    while(i < (arr.length + 1 - n)) {
        temp += arr[i + n - 1] - arr[i - 1];
        max = Math.max(temp, max);
        i++;
    }
    
    return max;
}

// Test Cases:
// maxSubarraySum([1, 2, 3, 4, 5], 2); // Expected: 9
// maxSubarraySum([2, 1, 5, 1, 3, 2], 3); // Expected: 9
// maxSubarraySum([4, 2, 1, 6], 2); // Expected: 7
// maxSubarraySum([-1, -2, -3, -4], 2); // Expected: -3