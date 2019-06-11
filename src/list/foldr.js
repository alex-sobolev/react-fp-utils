export const foldr = (fn, arr = [], initialVal = arr[arr.length - 1]) => arr.reduceRight(fn, initialVal);
