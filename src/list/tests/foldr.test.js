import { foldr } from '../foldr';

describe('foldr', () => {
  it('should fold an array from left to right, using a provided reducer function', () => {
    const reducer = (acc, x) => acc + x;
    const arr = ['!', 'world', ' ', ',', 'hello'];
    const expected = 'hello, world!';
    const initialValue = '';

    expect(foldr(reducer, arr, initialValue)).toEqual(expected);
  });
});
