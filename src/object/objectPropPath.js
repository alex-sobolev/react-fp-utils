export const objectPropPath = (path = [], obj = {}) =>
  path.reduce((xs, x) => (xs && xs[x] ? xs[x] : null), obj);
