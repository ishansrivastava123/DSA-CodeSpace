// https://leetcode.com/problems/reverse-string-ii/description/

// Question: Reverse String II

// Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.

// If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.

// Example 1:

// Input: s = "abcdefg", k = 2
// Output: "bacdfeg"
// Example 2:

// Input: s = "abcd", k = 2
// Output: "bacd"

// Constraints:

// 1 <= s.length <= 104
// s consists of only lowercase English letters.
// 1 <= k <= 104

// ------------------------------------------------

// My Solution (O(N)), but less space-efficient
function reverseString(str, k) {
    if (!str.length) return str;
    
    if (k > str.length) return str.split("").reverse().join("");
    
    let arr = [], len = 0, output = "";
    for(let i = 0; i < str.length; i += k) {
        arr.push(str.slice(i, i + k));
    }
    
    while (len < arr.length) {
        if (len % 2 === 0) {
            output += arr[len].split("").reverse().join("");
        } else {
            output += arr[len];
        }
        len++;
    }
    
    return output;
}

// Most optimised Solution (O(N))

function reverseString(s, k) {
    const arr = s.split("");

    for (let start = 0; start < arr.length; start += 2 * k) {
        let left = start;
        let right = Math.min(start + k - 1, arr.length - 1);

        while (left < right) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }

    return arr.join("");
}
