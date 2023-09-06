export function sumOfDigits(n) {
  // Convert the number to a string to work with individual digits
  const numStr = Math.abs(n).toString();
  let sum = 0;

  for (let i = 0; i < numStr.length; i++) {
    const digit = parseInt(numStr[i], 10); // Convert each character back to a number
    sum += digit;
  }

  return sum;
}
