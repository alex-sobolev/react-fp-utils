import { foldl } from '../foldl';

describe('foldl', () => {
  it('should fold an array from left to right, using a provided reducer function', () => {
    const reducer = (acc, x) => acc + x;
    const arr = [1, 2, 3, 4, 5];
    const expected = 16;

    expect(foldl(reducer, arr)).toEqual(expected);
  });
});
