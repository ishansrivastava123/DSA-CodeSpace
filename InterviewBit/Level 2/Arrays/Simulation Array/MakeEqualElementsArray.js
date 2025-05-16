// Question

// Given an array of all positive integers and an element “x”. 
// You need to find out whether all array elements can be made equal or not by performing any of the 3 operations: add x to any element in array, subtract x from any element from array, do nothing.
// This operation can be performed only once on an element of array.

// Problem Constraints
// 1<=|A|<=1e5
// 1<=A[i],x<=1e9

// Input Format
// First argument is array of integers .
// Second argument is B which denotes the value of x.

// Output Format
// Return 1 if we can make all elements equal , otherwise return 0.

// Example Input

// Input 1:
// A=[2,3,1]
// X=1

// Input 2:
// A=[2,3,1]
// X=2

// Example Output
// Ouput 1:
// 1
// Ouput 2:
// 0

// Example Explanation
// Explanation 1:
// WE can make all elements equal to 2.
// Explanation 2:
// There is no way to make all elements equal to 0.

// -------------------------------------------------------------------------

// Answer (O(log N) - My solution (BigInt not included))
function solve(A, B) {
	if ((A.length === 0) || (B === 0)) {
		return 0;
	} else if (A.length === 1) {
		return 1;
	}
	
	let obj = {}, i = 0;
	while(i < A.length) {
		obj[A[i]] = (obj[A[i]] || 0) + 1;
		obj[A[i] - B] = (obj[A[i] - B] || 0) + 1;
		obj[A[i] + B] = (obj[A[i] + B] || 0) + 1;
		i++;
	}
	
	console.log(obj);
	console.log("---------------------");
	
	if (Object.values(obj).includes(A.length)) {
		return 1;
	} else {
		return 0;
	}
}

// Answer (O(log N) - ChatGPT (BigInt included))
function solve(A, B) {
    A = A.map(a => BigInt(a));
    B = BigInt(B);
    
    let obj = {}, i = 0;
    while (i < A.length) {
        const a = A[i];
        const plus = (a + B).toString();
        const minus = (a - B).toString();
        const base = a.toString();

        obj[base] = (obj[base] || 0) + 1;
        obj[plus] = (obj[plus] || 0) + 1;
        obj[minus] = (obj[minus] || 0) + 1;

        i++;
    }

    if (Object.values(obj).includes(A.length)) {
        return 1;
    } else {
        return 0;
    }
}