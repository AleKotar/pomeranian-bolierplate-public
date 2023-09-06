import { render } from '@testing-library/react';
import { HelloWorld } from './HelloWorld';

test('renderowanie komponentu HelloWorld', () => {
  const { getByText } = render(<HelloWorld />);
  const element = getByText('Hello World');
  expect(element).toBeInTheDocument();
});
