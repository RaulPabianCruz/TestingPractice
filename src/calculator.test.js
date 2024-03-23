import calculator from './calculator';

test('add1', () => {
  expect(calculator().add(2, 2)).toBe(4);
});

test('add2', () => {
  expect(calculator().add(-2, -2)).toBe(-4);
});

test('add with strings', () => {
  expect(calculator().add('not a num', 'not a num')).toBe(NaN);
});

test('subtract1', () => {
  expect(calculator().subtract(9, 5)).toBe(4);
});

test('subtract2', () => {
  expect(calculator().subtract(-9, -5)).toBe(-4);
});

test('subtract with strings', () => {
  expect(calculator().subtract('not a number', 'not a number')).toBe(NaN);
});

test('multiply1', () => {
  expect(calculator().multiply(4, 4)).toBe(16);
});

test('multiply2', () => {
  expect(calculator().multiply(-5, -5)).toBe(25);
});

test('multiply with strings', () => {
  expect(calculator().multiply('not a number', 'not a number')).toBe(NaN);
});

test('divide1', () => {
  expect(calculator().divide(16, 4)).toBe(4);
});

test('divide2', () => {
  expect(calculator().divide(-25, 5)).toBe(-5);
});

test('divide with strings', () => {
  expect(calculator().divide('not a number', 'not a number')).toBe(NaN);
});

test('zero divided by zero', () => {
  expect(calculator().divide(0, 0)).toBe(NaN);
});

test('positive divided by zero', () => {
  expect(calculator().divide(1, 0)).toBe(Infinity);
});
