export const foldl = (fn, arr = [], initialVal = arr[0]) => arr.reduce(fn, initialVal);
