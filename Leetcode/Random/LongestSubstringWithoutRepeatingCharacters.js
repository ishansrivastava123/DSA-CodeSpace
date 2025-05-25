// Question

// Given a string s, find the length of the longest substring without duplicate characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

// ------------------------------------------------

// My Solution (O(N x N))
function lengthOfLongestSubstring(s) {
    if ((s.length === 0) || (s.length === 1)) {
        return s.length;
    }
    
    let i = 0, arr = [], start = 0, max = 0;
    
    while(i < s.length) {
        if (arr.includes(s[i])) {
            while (start < i) {
                if (arr.includes(s[i])) {
                    arr.shift();
                    start++;
                } else {
                    break;
                }
            }
            arr.push(s[i]);
        } else {
            arr.push(s[i]);
            max = Math.max(max, arr.length);
        }
        
        i++;
    }
    
    return max;
};

// My Another Solution (O(N x N))
function lengthOfLongestSubstring(s) {
    if ((s.length === 0) || (s.length === 1)) {
        return s.length;
    }
    
    let i = 0, arr = [], start = 0, max = 0;
    
    while(i < s.length) {
        if (arr.includes(s[i])) {
            start = arr.indexOf(s[i]) + 1;
            arr = arr.slice(start);
        }
        arr.push(s[i]);
        max = Math.max(max, arr.length);
        i++;
    }
    return max;
};

// Solution (O(N) - Without using Map)
function lengthOfLongestSubstring(s) {
    let seen = {};
    let maxLen = 0;
    let start = 0;

    for (let end = 0; end < s.length; end++) {
        const char = s[end];

        if (seen[char] !== undefined && seen[char] >= start) {
            start = seen[char] + 1;
        }

        seen[char] = end;
        maxLen = Math.max(maxLen, end - start + 1);
    }

    return maxLen;
}

// Solution (O(N) - Using Map)
function lengthOfLongestSubstring(s) {
    let map = new Map();
    let start = 0;
    let max = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i]) && map.get(s[i]) >= start) {
            start = map.get(s[i]) + 1;
        }
        
        map.set(s[i], i);
        max = Math.max(max, i - start + 1);
    }
    
    return max;
}