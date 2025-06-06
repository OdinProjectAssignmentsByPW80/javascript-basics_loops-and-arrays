// const leapYears = function (year) {
//   return year % 4 == 0 && (year % 100 != 0 || year % 400 == 0);
// };

/*
  I'm glad i ignored the hint - it is super misleading. The `if` statement is
  entirely superfluous (if conditional is true return true) and the conditional
  uses both `&&` and `||` just like I did.
  The one potential improvement is using variable names to make things more
  readable...
*/

const leapYears = function (year) {
  const isYearDivisibleByFour = year % 4 == 0;
  const isYearCentury = year % 100 == 0;
  const isYearDivisibleByFourHundred = year % 400 == 0;
  return (
    isYearDivisibleByFour && (!isYearCentury || isYearDivisibleByFourHundred)
  );
};

// Do not edit below this line
module.exports = leapYears;
