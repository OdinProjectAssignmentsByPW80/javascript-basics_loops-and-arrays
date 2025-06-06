const sumAll = function (a, b) {
  // negative number test
  if (a < 0 || b < 0) return "ERROR";

  // int number test
  if (!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR";

  // set high and low values
  let low = a < b ? a : b;
  let high = low == a ? b : a;

  // loop for sum
  let sum = 0;
  for (; low <= high; low++) {
    sum += low;
  }
  return sum;
};

// const sumAll = function (min, max) {
//   // negative number test
//   if (min < 0 || max < 0) return "ERROR";

//   // int number test
//   if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";

//   // ensure min & max are correct using array de-structuring (from solution)
//   if (min > max) [min, max] = [max, min];

//   // loop for sum
//   let sum = 0;
//   for (; min <= max; min++) {
//     sum += min;
//   }
//   return sum;
// };

/*
  Perhaps irrationally, I did not want to:
    if (min > max) {
      const temp = min;
      min = max;
      max = temp;
    }
  Array de-structuring, in the second example, is what I actually wanted. My
  solution looks nicer than the if statement above, but is functionally worse -
  with more variable declarations and conditional checks.
*/

// Do not edit below this line
module.exports = sumAll;
