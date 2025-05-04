// Question
// Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1

// Answer (O(log N))
function search(arr, value) {
    if (arr.length === 0) {
        return -1;
    }
    
    let mid, low = 0, high = arr.length - 1;
    
    while(low <= high) {
        mid = Math.floor((high + low) / 2);
        if (value === arr[mid]) {
            return mid;
        } else if (value > mid) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
}