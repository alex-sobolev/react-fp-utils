import { filter } from '../filter';

describe('filter', () => {
  it('should filter an array by provided predicate function', () => {
    const predicate = x => typeof x === 'string';
    const arr = [1, 2, 3, 'str1', true, 'str2', { name: 'name' }, 'str3'];
    const expected = ['str1', 'str2', 'str3'];

    expect(filter(predicate, arr)).toEqual(expected);
  });
});
