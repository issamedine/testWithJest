/**
 * This test, tests some knowledge of Regular Expressions.
 *
 * See the test for what functions you need to implement.
 */

/* you should be able to detect a number in a string */
const paragraph = 'abc123';

export const containsNumber = (para) => {
  const regex = /[1-9]/g;
  const found = regex.test(para);
  return found;
};

containsNumber(paragraph);

/* you should be able to detect a repeating letter in a string */
const duplicatedString = 'bookkeeping';

export const containsRepeatingLetter = (myarr) => {
  const arr = myarr.split('');
  const newArrString = [];

  arr.forEach((el) => {
    const testReg = /[1-9]/.test(el);
    if (!testReg) {
      newArrString.push(el);
    }
  });
  console.log('newArrString', newArrString);

  const results = [];
  let sorted_arr = newArrString.sort();
  console.log('sorted_arr', sorted_arr);
  for (let i = 0; i < sorted_arr.length - 1; i++) {
    if (sorted_arr[i] === sorted_arr[i + 1]) {
      results.push(sorted_arr[i]);
    }
  }
  console.log('results', results);
  return results.length !== 0 ? true : false;
};

containsRepeatingLetter(duplicatedString);

/* you should be able to determine whether a string ends with a vowel (aeiou) */

const para = 'cats';
export const endsWithVowel = (para) => {
  var last = para.charAt(para.length - 1);
  if (
    last === 'a' ||
    last === 'e' ||
    last === 'i' ||
    last === 'o' ||
    last === 'u' ||
    last === 'A' ||
    last === 'E' ||
    last === 'I' ||
    last === 'O' ||
    last === 'U'
  ) {
    return true;
  } else {
    return false;
  }
};

endsWithVowel(para);

/* you should be able to capture the first series of three numbers */
export const captureThreeNumbers = (str) => {
  const arr = str.split('');
  let results = [];
  for (let i = 0; i < arr.length; i++) {
    const checkCurrent = /[0-9]/.test(arr[i]);
    if (checkCurrent) {
      results.push(arr[i]);
    }
    if (results.length === 3) return results.join('');
    if (!checkCurrent) {
      results = [];
    }
  }
  if (results.length < 3) {
    return false;
  }
};
captureThreeNumbers('12ab12ab');

/* you should be able to determine whether a string matches a pattern */
export const matchesPattern = (str) => {
  const arrPattern = str.split('-');
  if (
    arrPattern[0].length === 3 &&
    /[0-9]/.test(arrPattern[0]) &&
    arrPattern[1].length === 3 &&
    /[0-9]/.test(arrPattern[1]) &&
    arrPattern[2].length === 4 &&
    /[0-9]/.test(arrPattern[2])
  ) {
    return true;
  } else {
    return false;
  }
};

matchesPattern('800-555-1212');

/* you should be able to detect correctly-formatted monetary amounts in USD */
let r = /^\$?[0-9]+\.?[0-9]?[0-9]+\.?[0-9]?[0-9]+\.?[0-9]?[0-9]?$/;
export const isUSD = (price) => {
  const reg = price.replace(/[,]/g, '.')
  if (reg.search(/[$]/)) {
    return false
  }
  return r.test(reg)
};

isUSD('$1,023,032.03');
