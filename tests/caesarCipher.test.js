import caesarCipher from '../src/js/caesarCipher';

test('Shift A letter by 1 to get B', () => {
  expect(caesarCipher('a', 1)).toBe('b');
});

test('Shift letters by 3', () => {
  expect(caesarCipher('abc', 3)).toBe('def');
});

test('Text wrapping is working', () => {
  expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('Text wrapping is working', () => {
  expect(caesarCipher('xyz', 3)).toBe('abc');
});
