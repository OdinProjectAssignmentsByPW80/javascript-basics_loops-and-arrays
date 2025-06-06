/*
  Based on the hint, I do not believe this is the way the exercise is supposed
  to be done. However, I still wanted to try...
*/
// const reverseString = function (str) {
//   let reversedString = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     // console.log(typeof str[i]);
//     reversedString += str[i];
//   }
//   return reversedString;
// };

/*
  Now the way I think the hint is suggesting
*/
const reverseString = (str) => str.split("").reverse().join("");

/*
  Looking at the solution I was correct.
  And, it is usually best practice to use built in language functions.
  But, the section is on loops and arrays; and, I was fairly sure it could be
  done just by looping through an array.
  It also feels like the array should be quicker - probably wrong though...
*/

// function repeatFunc(reps) {
//   const shortTestString = "short";
//   const mediumTestString = "This is a string to test the function";
//   const longTestString =
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod \
// tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim \
// veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea \
// commodo consequat. Duis aute irure dolor in reprehenderit in voluptate \
// velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint \
// occaecat cupidatat non proident, sunt in culpa qui officia deserunt \
// mollit anim id est laborum. \
// Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod \
// tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim \
// veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea \
// commodo consequat. Duis aute irure dolor in reprehenderit in voluptate \
// velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint \
// occaecat cupidatat non proident, sunt in culpa qui officia deserunt \
// mollit anim id est laborum.";
//   const testStrings = [shortTestString, mediumTestString, longTestString];
//   for (testString of testStrings) {
//     let startTime = new Date().getTime();
//     for (let i = 0; i < reps; i++) {
//       let temp = reverseString(testString);
//     }
//     let endTime = new Date().getTime();
//     let totalExecutionTime = endTime - startTime;
//     console.log(startTime, endTime, totalExecutionTime);
//   }
// }

// repeatFunc(1000000);

/*
  Using the testing function above the looped array method is approximately 2.5
  times faster than chaining inbuilt methods. Only appreciably noticeable with
  long strings and significant repetitions; so, most use-cases would still
  favour in-built rather than re-inventing the wheel.
  Nice to know both of my intuitions (do-abled looping through the string
  as an array; and, looked quicker) are correct.
*/

module.exports = reverseString;
