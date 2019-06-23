export const curry = (f, savedArgs = []) => (...args) => {
  const a = [...savedArgs, ...args];

  return a.length === f.length ? f(...a) : curry(f, a);
};
