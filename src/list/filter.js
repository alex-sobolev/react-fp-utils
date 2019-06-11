export const filter = (predicate, arr = []) =>
  arr.reduce((acc, item) => (predicate(item) ? [...acc, item] : acc), []);
