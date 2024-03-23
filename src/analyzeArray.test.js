import analyzeArray from './analyzeArray';

test('analyze avg1', () => {
  expect(analyzeArray([1, 2, 3, 4]).average).toBe(2.5);
});

test('analyze avg2', () => {
  expect(analyzeArray([4, 4, 4, 5, 5, 8]).average).toBe(5);
});

test('analyze min1', () => {
  expect(analyzeArray([5, 4, 3, 2, 1]).min).toBe(1);
});

test('analyze min2', () => {
  expect(analyzeArray([76, 45, 32, 86, 39]).min).toBe(32);
});

test('analyze max1', () => {
  expect(analyzeArray([5, 4, 3, 2, 1]).max).toBe(5);
});

test('analyze max2', () => {
  expect(analyzeArray([76, 34, 23, 56, 78, 93]).max).toBe(93);
});

test('analyze length1', () => {
  expect(analyzeArray([1, 2, 3, 4, 5, 6]).length).toBe(6);
});

test('analyze length2', () => {
  expect(analyzeArray([76, 34, 23, 56, 78, 93, 45, 32, 86]).length).toBe(9);
});

test('analyze1', () => {
  expect(analyzeArray([1, 2, 3, 4])).toEqual({
    average: 2.5,
    min: 1,
    max: 4,
    length: 4,
  });
});

test('analyze2', () => {
  expect(analyzeArray([76, 34, 23, 56, 78, 93])).toEqual({
    average: 60,
    min: 23,
    max: 93,
    length: 6,
  });
});

test('analyze throw1', () => {
  expect(() => {
    analyzeArray([]);
  }).toThrow('Invalid Array: Array is empty.');
});

test('analyze throw2', () => {
  expect(() => {
    analyzeArray(['one', 'two', 'three', 'four']);
  }).toThrow('Invalid Array: Array elements are not numbers.');
});
