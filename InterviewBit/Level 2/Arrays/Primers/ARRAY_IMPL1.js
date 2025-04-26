// Question
// // Predict the output of the following program :

// function performOps(A){
//     B = new Array(2 * A.length)

//     for (var i = 0; i < A.length; i++) {
//         B[i] = A[i];
//         B[i + A.length] = A[(A.length - i) % A.length];
//     }
//     return B;
// }
// Lets say performOps was called with A : [5, 10, 2, 1].
// What would be the output of the following call :

// ( NOTE : The output shoudl be written in the below provided text field , there should not be any ‘,’ between the numbers . For example: 1 2 3 4 )

// B = performOps(A)
// for (var i = 0; i < B.length; i++) {
//     process.stdout.write(B[i]+" ");
// }

// ------------------------------------------------

// Answer
// 5 10 2 1 5 1 2 10