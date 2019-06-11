import { pipe } from '../pipe';

describe('pipe helper function', () => {
  it('should pipe functions from left to right', () => {
    const func1 = x => x * 2;
    const func2 = x => x + 3;
    const func3 = x => x * 3;

    const piped = pipe(func1, func2, func3);

    const val = 3;
    const expected = 27;

    expect(piped(val)).toEqual(expected);
  });
});