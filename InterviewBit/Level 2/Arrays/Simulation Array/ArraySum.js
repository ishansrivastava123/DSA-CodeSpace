// Question

// Problem Description

// You are given two numbers represented as integer arrays A and B, where each digit is an element.
//  You have to return an array which representing the sum of the two given numbers.
// The last element denotes the least significant bit, and the first element denotes the most significant bit.
// Note : Array A and Array B can be of different size. ( i.e. length of Array A may not be equal to length of Array B ).

// Problem Constraints
// 1 <= |A|, |B| <= 105
// 0 <= Ai, Bi <= 9

// Input Format
// The first argument is an integer array A. The second argument is an integer array B.

// Output Format
// Return an array denoting the sum of the two numbers.

// Example Input
// Input 1:
// A = [1, 2, 3]
// B = [2, 5, 5]
// Input 2:
// A = [9, 9, 1]
// B = [1, 2, 1]

// Example Output
// Output 1:
// [3, 7, 8]
// Output 2:
// [1, 1, 1, 2]

// Example Explanation
// Explanation 1:
// Simply, add all the digits in their place.
// Explanation 2:
// 991 + 121 = 1112
// Note that the resultant array size might be larger.

// -------------------------------------------------------------------------

// Answer (O(N) - BigInt included)
function solve(A, B) {
    if ((A.length === 0) && (B.length === 0)) {
        return [];
    } else if (A.length === 0) {
        return B;
    } else if (B.length === 0) {
        return A;
    }
    
    let output = [];
    let numA = BigInt(A.join(""));
    let numB = BigInt(B.join(""));
    let sumStr = (BigInt(numA + numB)).toString();
    
    for(let i = 0; i < sumStr.length; i++) {
        output.push(BigInt(sumStr[i]));
    }
    
    return output;
}

// Answer (O(N) - BigInt not included)
// TestCase - Hard (Failed). Time Limit Exceeded.
function solve(A, B) {
    let output = [];
    let temp = 0;

    if (A.length === B.length) {
        for (let i = A.length - 1; i >= 0; i--) {
            let sum = Number(A[i]) + Number(B[i]) + temp;
            output.unshift(sum % 10);
            temp = Math.floor(sum / 10);
        }

        if (temp === 1) {
            output.unshift(1);
        }

        return output;
    }

    if (B.length > A.length) {
        [A, B] = [B, A];
    }

    let i = A.length - 1;
    let j = B.length - 1;

    while (j >= 0) {
        let sum = Number(A[i]) + Number(B[j]) + temp;
        output.unshift(sum % 10);
        temp = Math.floor(sum / 10);
        i--;
        j--;
    }

    while (i >= 0) {
        let sum = Number(A[i]) + temp;
        output.unshift(sum % 10);
        temp = Math.floor(sum / 10);
        i--;
    }

    if (temp === 1) {
        output.unshift(1);
    }

    return output;
}

// Answer (O(N) - BigInt not included - ChatGPT)
// TestCase - Hard (Failed). Time Limit Exceeded.
function solve(A, B) {
    if ((A.length === 0) && (B.length === 0)) {
        return [];
    } else if (A.length === 0) {
        return B;
    } else if (B.length === 0) {
        return A;
    }
    
    let output = [], temp = 0, i = A.length - 1, j = B.length - 1;
    
    while((i >= 0) || (j >= 0) || (temp > 0)) {
        let digitA = (i >= 0) ? Number(A[i]) : 0;
        let digitB = (j >= 0) ? Number(B[j]) : 0;
        let sum = digitA + digitB + temp;
        output.unshift(sum % 10);
        temp = Math.floor(sum / 10);
        i--;
        j--;
    }
}