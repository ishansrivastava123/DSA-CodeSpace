// Question

// Race Problem
// Problem Description
// Alice and Bob participate in a game TV show. When the game starts, a prize will be dropped to a certain point, and whoever gets to it first will get the prize.
// Alice has already chosen her starting position at point a. Bob, however, has not yet chosen his starting position.
// Bob knows that the prize could drop either at point x or at point y. He also knows that he can reach the prize faster than Alice if the distance from his starting position to the prize is strictly less than the distance from Alice's starting position to the prize. The distance between any two points c and d is calculated as |c - d|.
// Your task is to determine whether Bob can choose an integer point that guarantees he gets to the prize faster, regardless of where it appears (at point x or y). Bob can choose any integer point, except for a (in particular, he can choose to start at point x, point y, or any other point, but not a).
// Input Format

// You are given a 2D array where each sub-array contains three integers [a, x, y]
// a is Alice's starting position
// x and y are the two possible prize locations
// All values are integers where 1 ≤ a, x, y ≤ 100
// Points a, x, and y are pairwise distinct

// Output Format
// Return an array of integers where:

// 1 represents "YES" (Bob can guarantee a win)
// 0 represents "NO" (Bob cannot guarantee a win)

// Examples
// Input:
// javascript[[1, 3, 4], [5, 3, 1], [3, 1, 5]]
// Output:
// javascript[1, 1, 0]
// Explanation:
// Test Case 1: [1, 3, 4]

// Alice is at position 1, prizes at 3 and 4
// Bob can choose position 4
// If prize at x=3: Bob's distance = |4-3| = 1, Alice's distance = |1-3| = 2
// If prize at y=4: Bob's distance = |4-4| = 0, Alice's distance = |1-4| = 3
// Bob wins in both cases → YES (1)

// Test Case 2: [5, 3, 1]

// Alice is at position 5, prizes at 3 and 1
// Bob can choose position 2
// If prize at x=3: Bob's distance = |2-3| = 1, Alice's distance = |5-3| = 2
// If prize at y=1: Bob's distance = |2-1| = 1, Alice's distance = |5-1| = 4
// Bob wins in both cases → YES (1)

// Test Case 3: [3, 1, 5]

// Alice is at position 3, prizes at 1 and 5
// Alice is positioned between the two prizes
// No matter where Bob positions himself, Alice will be closer to at least one prize
// Bob cannot guarantee a win → NO (0)

// -------------------------------------------------------------------------

// Answer (O(N))
function firstPrize(arr) {
    if (arr.length < 1) {
        return 0;
    }
    
    const newArr = arr.map((item) => {
        if ((item[0] >= Math.min(item[1], item[2])) && (item[0] <= Math.max(item[1], item[2]))) {
            return 0;
        } else {
            return 1;
        }
    })
    
    return newArr;
}