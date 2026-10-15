// Question: Count words without using any in-built functions
// https://www.youtube.com/shorts/MZ4JrG4VIkw

// Solution
const wordCounter = (str) => {
  let c = 0, i = 0, arr = [], word = '';
  
  while (i < str.length) {
    if (str[i] !== ' ') {
      while ((str[i] !== ' ') && (i < str.length)) {
        // word += str[i];
        i++;
      }
      c++
      // arr.push(word);
      // word = '';
    } else {
      i++;
    }
  }
  // console.log(arr);
  // return arr.length;
  return c;
}

console.log(wordCounter("      hi     I   .    am    Ishan   a    "));
