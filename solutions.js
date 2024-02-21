// Sum of Two Numbers
function sum(a, b) {
  // Add your code here
  if (isNaN(a) || isNaN(b)) {
    console.log("Los datos de entrada no son adecuados");
    return;
  } else {
    return a + b;
  }
}

// Factorial of a Number
function factorial(n) {
  // Add your code here
  if (isNaN(n)) {
    console.log("Los datos de entrada no son adecuados");
    return;
  } else if (n === 0 || n === 1) {
    return 1;
  } else {
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
}

// Find the Largest Number
function findLargest(arr) {
  // Add your code here
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number" || isNaN(arr[i])) {
      console.log("Los datos de entrada no son adecuados");
      return; // Sale de la función si encuentra un valor que no es un número
    }
  }
  if (arr.length === 0) {
    return null;
  }
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

// Count Vowels in a String
function countVowels(str) {
  // Add your code here
  if (typeof str === "string") {
    const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    let count = 0;
    for (let char of str) {
      if (vowels.includes(char)) {
        count++;
      }
    }
    return count;
  } else {
    console.log("Los datos de entrada no son adecuados");
    return;
  }
}

// Check if a Number is Prime
function isPrime(n) {
  // Add your code here
  if (isNaN(n)) {
    console.log("Los datos de entrada no son adecuados");
    return;
  } else {
    if (n <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
}

module.exports = {
  sum,
  factorial,
  findLargest,
  countVowels,
  isPrime,
};
