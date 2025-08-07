// Question

// 3 Sum - Find All Triplets with Zero Sum
// Given an array arr[], the task is to find all possible indices {i, j, k} of triplet {arr[i], arr[j], arr[k]} such that their sum is equal to zero and all indices in a triplet should be distinct (i != j, j != k, k != i). We need to return indices of a triplet in sorted order, i.e., i < j < k.

// Examples :

// Input: arr[] = {0, -1, 2, -3, 1}
// Output: {{0, 1, 4}, {2, 3, 4}}
// Explanation:  Two triplets with sum 0 are:
// arr[0] + arr[1] + arr[4] = 0 + (-1) + 1 = 0
// arr[2] + arr[3] + arr[4] = 2 + (-3) + 1 = 0

// Input: arr[] = {1, -2, 1, 0, 5}
// Output: {{0, 1, 2}}
// Explanation: Only triplet which satisfies the condition is arr[0] + arr[1] + arr[2] = 1 + (-2) + 1 = 0

// Input: arr[] = {2, 3, 1, 0, 5}
// Output: {{}}
// Explanation: There is no triplet with sum 0

// -------------------------------------------------------------------------

// Answer (O(NxNxN))
function findTriplets(arr) {
    let output = [];
    
    for(let i = 0; i < arr.length - 2; i++) {
        for(let j = (i + 1); j < arr.length - 1; j++) {
            for(let k = (j + 1); k < arr.length; k++) {
                if (arr[i] + arr[j] + arr[k] === 0) {
                    output.push([i, j, k]);
                }
            }
        }
    }
    
    return output;
}

// Answer (O(NxN))
function findTriplets(arr) {
    let result = [];
    const n = arr.length;

    let indexedArr = arr.map((value, index) => ({ value, index }));
    indexedArr.sort((a, b) => a.value - b.value);

    for (let i = 0; i < n - 2; i++) {
        if (i > 0 && indexedArr[i].value === indexedArr[i - 1].value) continue;

        let left = i + 1;
        let right = n - 1;

        while (left < right) {
            const sum = indexedArr[i].value + indexedArr[left].value + indexedArr[right].value;

            if (sum === 0) {
                result.push([indexedArr[i].index, indexedArr[left].index, indexedArr[right].index]);

                while (left < right && indexedArr[left].value === indexedArr[left + 1].value) left++;
                while (left < right && indexedArr[right].value === indexedArr[right - 1].value) right--;

                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    result = result.map(triplet => triplet.sort((a, b) => a - b));

    return result;
}