function reverseString(inputString) {
  let reversed = '';
  for (let i = inputString.length - 1; i >= 0; i -= 1) {
    reversed = reversed.concat(inputString.charAt(i));
  }
  return reversed;
}

export default reverseString;
