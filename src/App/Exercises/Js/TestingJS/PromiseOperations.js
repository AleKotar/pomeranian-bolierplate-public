export function multiplyByTwo(number) {
  return new Promise((resolve, reject) => {
    if (typeof number !== 'number') {
      reject('to nie jest liczba!');
    } else {
      resolve(number * 2);
    }
  });
}
