export const map = (fn, arr = []) =>
  arr.reduce((acc, elem) => [...acc, fn(elem)], []);
