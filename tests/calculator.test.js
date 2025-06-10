import Calculator from '../src/js/calculator';

test('Adds two numbers together', () => {
  expect(Calculator.add(3, 4)).toBe(7);
});

test('Subtracts two numbers', () => {
  expect(Calculator.subtract(3, 4)).toBe(-1);
});

test('Divides two numbers', () => {
  expect(Calculator.divide(4, 1)).toBe(4);
});

test('Multiply two numbers', () => {
  expect(Calculator.multiply(4, 1)).toBe(4);
});
