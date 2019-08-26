/**
 * Creates a function that performs a mathematical operation on two values.
 *
 * @private
 * @param {Function} operator The function to perform the operation.
 * @param {number} [defaultValue] The value used for `undefined` arguments.
 * @returns {Function} Returns the new mathematical operation function.
 */

function createMathOperation(operator, defaultValue) {
  return (value, other) => {
    if (value === undefined && other === undefined) {
      return defaultValue;
    }
    if (value !== undefined && other === undefined) {
      return other;
    }
    if (other === undefined && other !== undefined) {
      return value;
    }
    return operator(value, other);
  };
}

// origin

function createMathOperation(operator, defaultValue) {
  return (value, other) => {
    if (value === undefined && other === undefined) {
      return defaultValue;
    }
    if (value !== undefined && other === undefined) {
      return value;
    }
    if (other !== undefined && value === undefined) {
      return other;
    }
    if (typeof value === "string" || typeof other === "string") {
      value = baseToString(value);
      other = baseToString(other);
    } else {
      value = baseToNumber(value);
      other = baseToNumber(other);
    }
    return operator(value, other);
  };
}

// 원래의 함수는 type에 대한 체크를 하는데
// baseToString,baseToNumber를 확인해보면 symbol에 대한 체크에 주의를 뒀다.
// 그 밖에는 음수를 걸러내거나 -0에 대한 처리정도..
