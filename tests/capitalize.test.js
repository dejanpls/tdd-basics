import capitalize from '../src/js/capitalize.js';

test('Capitalize first letter of a string', () => {
  expect(capitalize('dejan')).toMatch('Dejan');
});

test('Only first letter should be capitalized', () => {
  expect(capitalize('deJaN')).toMatch('Dejan');
});
