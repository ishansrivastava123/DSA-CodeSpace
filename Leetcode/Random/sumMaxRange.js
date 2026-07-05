// https://leetcode.com/contest/weekly-contest-509/problems/sum-of-integers-with-maximum-digit-range/description/

// ------------------------------------------------

// My Solution:
Time: O(N x digits), Space: O(n):

function sumMaxRange(intArr) {
    if (!intArr.length) return 0;
    if (intArr.length === 1) return intArr[0];
    
    let i = 0, range = 0, maxRange = 0, maxRangeArr = [];
    while(i < intArr.length) {
        range = Math.max(...(intArr[i].toString()).split('').map(item => Number(item))) - Math.min(...(intArr[i].toString()).split('').map(item => Number(item)));
        if (range > maxRange) {
            maxRange = range;
            maxRangeArr = []
            maxRangeArr.push(intArr[i]);
        } else if (range === maxRange) {
            maxRangeArr.push(intArr[i]);
        }
        i++;
    }
    
    return maxRangeArr.reduce((item, total) => total += item);
}

// Optimized Solution 1:
Time: O(N x digits), Space: O(digits):

function sumMaxRange(nums) {
    let maxRange = -1;
    let sum = 0;

    for (const num of nums) {
        const digits = num.toString().split('').map(Number);
        const range = Math.max(...digits) - Math.min(...digits);

        if (range > maxRange) {
            maxRange = range;
            sum = num;
        } else if (range === maxRange) {
            sum += num;
        }
    }

    return sum;
}

// Mathematical version (best):
Time: O(N x digits), Space: O(1):

function digitRange(num) {
    if (num === 0) return 0;

    let min = 9;
    let max = 0;

    while (num > 0) {
        const digit = num % 10;
        min = Math.min(min, digit);
        max = Math.max(max, digit);
        num = Math.floor(num / 10);
    }

    return max - min;
}

function sumMaxRange(nums) {
    let maxRange = -1;
    let sum = 0;

    for (const num of nums) {
        const range = digitRange(num);

        if (range > maxRange) {
            maxRange = range;
            sum = num;
        } else if (range === maxRange) {
            sum += num;
        }
    }

    return sum;
}
