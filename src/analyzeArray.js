function analyzeArray(inputArray) {
  if (inputArray.length === 0)
    throw new Error('Invalid Array: Array is empty.');

  let total = 0;
  for (let i = 0; i < inputArray.length; i += 1) {
    if (typeof inputArray[i] !== 'number')
      throw new Error('Invalid Array: Array elements are not numbers.');
    total += inputArray[i];
  }

  let average = total / inputArray.length;
  let min = Math.min(...inputArray);
  let max = Math.max(...inputArray);
  let length = inputArray.length;
  return { average, min, max, length };
}
export default analyzeArray;
