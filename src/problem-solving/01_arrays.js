/**
 * Have a look at the test and implement the needed function, so the test will succeed
 */

/* you should be able to add the values of an array */
export const sum = (array) => {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  return array.reduce(reducer);
};
sum([1, 2, 3, 4]);

/* you should be able to concatenate arrays */
const a = [1, 2, 3, 4];
const b = ['a', 'b'];
const c = ['c', 1];
export const result = a.concat(b, c);

/* you should be able to count the occurrences of an item in an array */
const arr = [1, 2, 4, 4, 3, 4, 3];
const num = 4;

export const count = (arr, num) => {
  let res = [];
  arr.forEach((el) => el === num && res.push(el));
  return res.length;
};
count(arr, num);

/* you should be able to find duplicates in an array */
const duplicatedArray = [1, 2, 4, 4, 3, 3, 1, 5, 3];

export const duplicates = (arr) => {
  let sorted_arr = arr.slice().sort();
  let results = [];
  for (let i = 0; i < sorted_arr.length - 1; i++) {
    const findDup = results.some((el) => sorted_arr[i] === el);

    if (sorted_arr[i] === sorted_arr[i + 1] && !findDup) {
      results.push(sorted_arr[i]);
    }
  }
  return results;
};

duplicates(duplicatedArray);

/* you should be able to square each number in an array */
const arrSq = [1, 2, 3, 4];
export const square = (arrSq) => arrSq.map((el) => el * el);
square(arrSq)