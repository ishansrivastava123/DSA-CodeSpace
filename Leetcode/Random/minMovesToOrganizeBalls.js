// https://www.oahelper.in/problems/MjkyOHww/minimum-moves-to-organize-balls

// ------------------------------------------------

// My Solution (incorrect and incomplete):
function organizeBalls(balls) {
    if (!balls.length || (balls.length === 1)) return 0;
    
    balls.sort((a, b) => a - b);
    const len = balls.length;
    const ballsMid = Math.floor(len / 2);
    let upperDiff, lowerDiff, newMid = ballsMid;
    
    while ((balls[len - 1] - balls[0]) !== (len - 1)) {
        upperDiff = balls[ballsMid + 1] - balls[ballsMid];
        lowerDiff = balls[ballsMid] - balls[ballsMid - 1];
        
        if ((upperDiff <= lowerDiff) && (upperDiff !== 1)) {
            balls[len - 1] = balls[ballsMid] + 1;
            balls = [
                ...balls.slice(0, ballsMid + 1),
                balls[len - 1],
                ...balls.slice(ballsMid + 1, len - 2),
            ];
            newMid = ballsMid + 1;
        } else if ((lowerDiff < upperDiff) && (lowerDiff !== 1)) {
            balls[0] = balls[ballsMid] - 1;
            balls = [
                ...balls.slice(1, balls[ballsMid]),
                balls[0],
                ...balls.slice(balls[ballsMid]),
            ];
            newMid = ballsMid - 1;
        } else {
            
        }
    }
}

console.log(organizeBalls([8,4,1,15,10]))

// [6,4,1,7,10]
// [1,4,6,7,10]

// [8,4,1,15,10]
// [1,4,8,10,15]
// [1,4,8,9,10]
