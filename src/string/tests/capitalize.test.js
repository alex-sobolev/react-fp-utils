import { capitalize } from '../capitalize';

describe('capitalize string utility', () => {
  it('should capitalize a string', () => {
    const str = 'word';
    const expected = 'Word';

    expect(capitalize(str)).toEqual(expected);
  });

  it('should capitalize only first word in a string', () => {
    const str = 'brave new world';
    const expected = 'Brave new world';

    expect(capitalize(str)).toEqual(expected);
  });
});
