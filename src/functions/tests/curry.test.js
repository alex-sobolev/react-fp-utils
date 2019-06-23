import { curry } from '../curry';

const addThree = (n1, n2, n3) => n1 + n2 + n3;

describe('curry utility', () => {
  it('should curry a function when not enough arguments passed', () => {
    const curried = curry(addThree);
    const underTest = curried(1, 2);
    const expectedType = 'function';

    expect(typeof underTest).toEqual(expectedType);
  });

  it('should return a result of a function execution when all arguments passed', () => {
    const curried = curry(addThree);
    const expected= 6;

    expect(curried(1,2,3)).toEqual(expected);
    expect(curried(1)(2)(3)).toEqual(expected);
  });
});
