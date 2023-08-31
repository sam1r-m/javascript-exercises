const add = function(a, b) {
	return (a + b);
};

const subtract = function(a, b) {
  return (a - b);
};

const sum = function(arr) {
  let total = 0;
	arr.forEach((e) => {
    total += e;
  })

  return total;
};

const multiply = function(arr) {
  if (arr[0] === 0) {
    return 0;
  }
  
  let total = 1;
  arr.forEach((e) => {
    total *= e;
  })

  return total;
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(a) {
	if (a === 0 || a === 1) {
    return 1;
  }

  return (a * factorial(a - 1));
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
