function caesarCipher(inputString, shift) {
  let upperString = inputString.toLocaleUpperCase();
  let newString = '';
  let stringLength = upperString.length;
  for (let i = 0; i < stringLength; i += 1) {
    let newCode = upperString.charCodeAt(i);
    if (isCapitalLetter(newCode)) {
      newCode = applyShift(newCode, shift);
    }
    newString = newString.concat(String.fromCharCode(newCode));
  }
  return newString;
}

function isCapitalLetter(charCode) {
  return charCode >= 65 && charCode <= 90;
}

function applyShift(charCode, shift) {
  charCode += shift;
  if (charCode > 90) {
    charCode -= 90;
    charCode += 64;
  }
  return charCode;
}

export default caesarCipher;
