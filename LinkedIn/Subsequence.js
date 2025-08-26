// Question

// Durai Prasanth
// JavaScript Interview Coding Task Question - Day 70

// Q: Check If a String is a Subsequence of Another
// Write a function that checks whether the characters in the first string form a subsequence of the second string.
// A subsequence means the characters appear in the same order, but not necessarily consecutively.

// 🧠 Explanation:
// Two pointers:
// i for s1 (target),
// j for s2 (source).
// If characters match, move both pointers.
// If not, move only the s2 pointer.
// If we’ve matched all characters in s1 (i.e., i === s1.length), then it’s a subsequence ✅

// 📌 Why this matters in interviews:
// This pattern helps solve a TON of array and string problems efficiently.
// Shows you understand optimal solutions, not just brute force.

// ------------------------------------------------

// My Solution (O(N))
function subSequence(str1, str2) {
    if ((str1.length === 0) || (str2.length === 0)) {
        return new Error("Please check the inputs!");
    }
    
    let i = 0, j = 0;
    while((i < str1.length) && (j < str2.length)) {
        if (str1[i] === str2[j]) {
            i++;
        }
        
        j++;
    }
    
    return (i === str1.length);
}