import { multiplyByTwo } from './PromiseOperations';

test('mnożenie przez 2', async () => {
  const result = await multiplyByTwo(4);
  expect(result).toBe(8);
});

test('Rzucenie bledu przy niepoprawnym argumencie', async () => {
  try {
    await multiplyByTwo('abc');
  } catch (error) {
    expect(error).toBe('to nie jest liczba!');
  }
});
