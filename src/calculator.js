function calculator() {
  function add(operand1, operand2) {
    if (typeof operand1 === 'number' && typeof operand2 === 'number')
      return operand1 + operand2;
    return NaN;
  }

  function subtract(operand1, operand2) {
    return operand1 - operand2;
  }

  function multiply(operand1, operand2) {
    return operand1 * operand2;
  }

  function divide(operand1, operand2) {
    return operand1 / operand2;
  }

  return { add, subtract, multiply, divide };
}

export default calculator;
