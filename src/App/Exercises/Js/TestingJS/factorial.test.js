import { factorialJS } from './factorial';

test('Silnia z 0 powinna wynosić 1', () => {
  expect(factorialJS(0)).toBe(1);
});

test('silnia z 3 powinna wynosić 6', () => {
  expect(factorialJS(3)).toBe(6);
});
