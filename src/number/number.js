const splitByDecimal = number =>
  Math.abs(number)
    .toString()
    .split('.');

export const maxDecimalLength = (numbers = []) =>
  numbers.reduce((acc, num) => {
    const decimalSplit = splitByDecimal(num);
    const decimalLength = decimalSplit.length > 1 ? decimalSplit[1].length : 0;

    return decimalLength > acc ? decimalLength : acc;
  }, 0);

export const addFloats = (...numbers) => {
  const decimal = maxDecimalLength(numbers);

  return numbers.reduce((acc, num) => parseFloat((acc + num).toFixed(decimal)), 0);
};

export const multiplyDecimal = (numbers = []) =>
  numbers.reduce((acc, num) => {
    const decimalSplit = splitByDecimal(num);
    const decimalLength = decimalSplit.length > 1 ? decimalSplit[1].length : 0;

    return acc + decimalLength;
  }, 0);

export const multiplyFloats = (...numbers) => {
  const decimal = multiplyDecimal(numbers);

  return numbers.reduce((acc, num) => parseFloat((acc * num).toFixed(decimal)), 1);
};

export const divideNums = (num1, num2, precision = 0) => parseFloat((num1 / num2).toFixed(precision));
