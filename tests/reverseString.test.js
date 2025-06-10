import reverseString from '../src/js/reverseString';

test('Return a string reversed', () => {
  expect(reverseString('dejan')).toMatch('najed');
});
