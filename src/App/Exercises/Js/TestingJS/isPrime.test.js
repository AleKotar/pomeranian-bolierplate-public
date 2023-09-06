import { isPrime } from './isPrime';

test('Liczba 7 powinna być liczbą pierwszą', () => {
  expect(isPrime(7)).toBe(true);
});

test('liczba 12 nie powinna być pierwszą', () => {
  expect(isPrime(12)).toBe(false);
});
