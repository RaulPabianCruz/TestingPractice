function capitalize(inputString) {
  let capitalized = inputString.charAt(0).toLocaleUpperCase();
  return capitalized.concat(inputString.substring(1));
}

export default capitalize;
