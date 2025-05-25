// Question

// The manager of an Amazon warehouse needs to ship n products from different locations, represented by an array locations[i]. The manager can perform two types of operations: ship two products with different locations, or ship one product. The goal is to determine the minimum number of operations required to ship all products. 

// Example:
// Input1: [1,8,6,7,7]
// Output1: Group as [1,7], [8,7], [6] → 3 groups → 3 operations

// Input1: [1,8,6,6,7,7]
// Output1: Group as [1,7], [8,7], [6], [6] → 4 groups

// ------------------------------------------------

// Solution (O(N))
function minOperation(arr) {
    if (arr.length <= 1) {
        return arr.length;
    } else if ((arr.length === 2) && (arr[0] !== arr[1])) {
        return 1;
    } else if ((arr.length === 2) && (arr[0] === arr[1])) {
        return 2;
    }
    
    let i = 0, max = 0, obj = {}, count = 0;
    
    while(i < arr.length) {
        obj[arr[i]] = (obj[arr[i]] || 0) + 1;
        max = Math.max(max, obj[arr[i]]);
        i++;
    }
    
    return Math.max(max, Math.ceil(arr.length / 2));
}