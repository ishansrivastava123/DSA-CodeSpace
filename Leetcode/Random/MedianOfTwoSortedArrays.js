// Question

// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
// The overall run time complexity should be O(log (m+n)).

// Example 1:
// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.

// Example 2:
// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

// Constraints:
// nums1.length == m
// nums2.length == n
// 0 <= m <= 1000
// 0 <= n <= 1000
// 1 <= m + n <= 2000
// -106 <= nums1[i], nums2[i] <= 106

// ------------------------------------------------

// Solution (O(M + N), instead of O(log(M + N)), which needs binary search)
function findMedianSortedArrays(arr1, arr2) {
    if ((arr1.length === 0) && (arr2.length === 0)) {
        return 0;
    } else if (arr1.length === 0) {
        return ((arr2.length % 2) === 0) 
        ? ((arr2[Math.floor((arr2.length - 1) / 2)] + arr2[Math.ceil((arr2.length - 1) / 2)]) / 2)
        : arr2[Math.floor(arr2.length / 2)]
    } else if (arr2.length === 0) {
        return ((arr1.length % 2) === 0) 
        ? ((arr1[Math.floor((arr1.length - 1) / 2)] + arr1[Math.ceil((arr1.length - 1) / 2)]) / 2)
        : arr1[Math.floor(arr1.length / 2)]
    }
    
    let i = 0, j = 0, merged = [];
    
    while((i < arr1.length) && (j < arr2.length)) {
        if (arr1[i] < arr2[j]) {
            merged.push(arr1[i]);
            i++;
        } else if (arr1[i] > arr2[j]) {
            merged.push(arr2[j]);
            j++;
        } else {
            merged.push(arr1[i]);
            i++;
            merged.push(arr2[j]);
            j++;
        }
    }
        
    if (i === arr1.length) {
        for(let a = j; a < arr2.length; a++) {
            merged.push(arr2[a]);
        }
    } else if (j === arr2.length) {
        for(let a = i; a < arr1.length; a++) {
            merged.push(arr1[a]);
        }
    }
    
    console.log("merged: ", merged);
    
    return ((merged.length % 2) === 0) 
    ? ((merged[Math.floor((merged.length - 1) / 2)] + merged[Math.ceil((merged.length - 1) / 2)]) / 2)
    : merged[Math.floor(merged.length / 2)];
}