// https://www.ambitionbox.com/profiles/software-development-engineer-ii/interview-questions?utm_campaign=read_interview_single&utm_source=naukri&utm_medium=email&cvId=&utm_content=4320_ab_read_reviews_mailer_read_ab_content_email_start_b5e2&utm_term=1267177
// Question: Given two large numeric comma-separated strings, calculate their sum while maintaining the correct position of commas. Since the strings can be large, you cannot convert them into integral values.

// Solution:

function largeSum(str1, str2) {
  if (str1.length > str2.length) {
    str2 = str2.padStart(str1.length, "0");
  } else if(str2.length > str1.length) {
    str1 = str1.padStart(str2.length, "0");
  }

  let carry = 0, output = "";

  for(let i = (str1.length - 1); i >= 0; i--) {
    if ((+str1[i] === "NaN") || (+str2[i] === "NaN")) {
    console.log("IFFFF");
    console.log("str1[i]: ", str1[i]);
    console.log("str2[i]: ", str2[i]);
      if (+str1[i] !== "NaN") {
        const rem = carry + (+str1[i]);
        output += rem % 10;
        carry = Math.floor(rem / 10);
      } else if (+str2[i] !== "NaN") {
        const rem = carry + (+str2[i]);
        output += rem % 10;
        carry = Math.floor(rem / 10);
      } else {
        continue;
      }
    } else {
      console.log("ELSEEEE");
      const rem = carry + (+str1[i]) + (+str2[i]);
      output += rem % 10;
      carry = Math.floor(rem / 10);
    }
    console.log("-----------------");
  }

  console.log(output);

  output = output.split('').reverse().map((char, index) => {
    if((index + 1) % 3 === 0) {
      return (char + ",");
    } else {
      return char
    }
  })

  return output;
}

console.log(largeSum("1,123,456,789", "99,876"));
