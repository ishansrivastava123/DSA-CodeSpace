// Question: https://www.greatfrontend.com/interviews/study/blind75/questions/algo/array-balanced-brackets

// Solution:

export default function isBalancedBrackets(str) {
  const openBr = ['(', '{', '['];
  const closeBr = [')', '}', ']'];
  const arr = [];
  let closeIndex;

  for(let elem of str) {
    if (openBr.includes(elem)) {
      arr.push(elem);
    } else {
      closeIndex = closeBr.indexOf(elem);
      if (arr[arr.length - 1] === openBr[closeIndex]) {
        arr.pop();
      } else {
        return false;
      }
    }
  }

  return !arr.length;
}
