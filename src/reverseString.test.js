import reverseString from './reverseString';

test('reverse string 1', () => {
  expect(reverseString('raul')).toBe('luar');
});

test('reverse string 2', () => {
  expect(reverseString('kazuya')).toBe('ayuzak');
});

test('reverse w/ spaces', () => {
  expect(reverseString('a lot')).toBe('tol a');
});
