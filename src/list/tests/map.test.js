import { map } from '../map';

describe('map helper function', () => {
  it('should apply a provided function to each array member and return new array', () => {
    const fn = x => x * 2;
    const arr = [1, 2, 3, 4, 5];
    const expected = [2, 4, 6, 8, 10];

    expect(map(fn, arr)).toEqual(expected);
  });
});
