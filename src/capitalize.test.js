import capitalize from './capitalize';

test('Capitalize 1', () => {
  expect(capitalize('raul')).toBe('Raul');
});

test('Capitalize 2', () => {
  expect(capitalize('kazuya')).toBe('Kazuya');
});

test('Edge case', () => {
  expect(capitalize('1234')).toBe('1234');
});
