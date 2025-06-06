const removeFromArray = function (arr) {
  for (const arg of arguments) {
    arr = arr.filter((item) => item !== arg);
  }
  return arr;
};

/*
  The solution uses `...args` instead of `arguments`.
  `...` is the "rest parameter" and places any additional arguments in a true
  array.
  `arguments` is an array like object available within all non-arrow functions.
  It does not have array methods.
  Despite my research suggesting `arguments` it seems it is not favoured - due
  to the lack of full array functionality.
  This makes sense. Even though I did not think of it, the arr.includes() method
  does create more concise, elegant code.
  The only reason I can think to use `arguments` over `...args` would be error
  checking. `...args` indicates to other developers that additional arguments
  are expected/supported. If, for some-reason, it was essential a function be
  called without additional arguments one could use `arguments` to check:
    `if (arguments) { // error code }`
  From mdd web docs:
  - The arguments object is not a real array, while rest parameters are Array
    instances, meaning methods like sort(), map(), forEach() or pop() can be
    applied on it directly.
  - The arguments object has the additional (deprecated) callee property.
  - In a non-strict function with simple parameters, the arguments object syncs
    its indices with the values of parameters. The rest parameter array never
    updates its value when the named parameters are re-assigned.
  - The rest parameter bundles all the extra parameters into a single array, but
    does not contain any named argument defined before the ...restParam. The
    arguments object contains all of the parameters — including the parameters
    in the ...restParam array — bundled into one array-like object.
  I can't immediately think of a use case but the difference is, at least,
  clear.
  So ... the code above filters `arr` one too many times. It compares each
  element of the array to the entire array before it does anything useful.
  And, it actually looks like arguments is an object with each property given a
  sequential integer as its name.
*/

// Do not edit below this line
module.exports = removeFromArray;
