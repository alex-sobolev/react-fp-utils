import { maxDecimalLength, addFloats, multiplyDecimal, multiplyFloats, divideNums } from '../number';

describe('number helper', () => {
  it('should return highest decimal precision among a list of floats', () => {
    const floats = [1.7, 2.34, -0.932];
    const expected = 3;

    expect(maxDecimalLength(floats)).toEqual(expected);
  });

  it('should add floats', () => {
    const num1 = 0.1;
    const num2 = 0.2;
    const expected = 0.3;

    expect(addFloats(num1, num2)).toEqual(expected);
  });

  it('should return decimal precision for floats multiplication', () => {
    const floats = [0.1, 0.2, 2, 0.23];
    const expected = 4;

    expect(multiplyDecimal(floats)).toEqual(expected);
  });

  it('should multiply floats', () => {
    const num1 = 0.1;
    const num2 = 0.2;
    const num3 = 2;
    const num4 = -1;
    const expected = -0.04;

    expect(multiplyFloats(num1, num2, num3, num4)).toEqual(expected);
  });

  it('should divide integers or floats with given precision', () => {
    const num1 = 0.1;
    const num2 = 0.2;
    const precision1 = 1;
    const expected1 = 0.5;

    const num3 = 10;
    const num4 = 2;
    const expected2 = 5;

    expect(divideNums(num1, num2, precision1)).toEqual(expected1);
    expect(divideNums(num3, num4)).toEqual(expected2);
  });
});
