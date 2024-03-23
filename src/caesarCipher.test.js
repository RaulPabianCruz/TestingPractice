import caesarCipher from './caesarCipher';

test('cipher1', () => {
  expect(caesarCipher('AAA', 3)).toBe('DDD');
});

test('cipher2', () => {
  expect(caesarCipher('bbb', 4)).toBe('FFF');
});

test('cipher3', () => {
  expect(caesarCipher('ZZZ', 5)).toBe('EEE');
});

test('cipher4', () => {
  expect(caesarCipher('...', 6)).toBe('...');
});
