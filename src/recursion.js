// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  if (n < 2) {
    return 1;
  }
  return nFibonacci(n - 1) + nFibonacci(n - 2);
};

const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  if (n <= 1) {
    return 1;
  }
  return n * nFactorial(n - 1);
};

/* Extra Credit */
const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false
  const destruct = (input) => {
    if (!Object.is(Object(input), input)) {
      return input;
    }
    const keys = Object.keys(input);
    const first = input[keys[0]];
    return Object.is(Object(first), first) ? destruct(first) : first;
  };
  const keys = Object.keys(obj);
  const first = obj[keys[0]];
  for (let i = 0; i < keys.length; i++) {
    const current = obj[keys[i]];
    if (Object.is(Object(current), current) && !checkMatchingLeaves(current)) {
      return false;
    }
    if (!Object.is(destruct(current), destruct(first))) {
      return false;
    }
  }
  return true;
};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
