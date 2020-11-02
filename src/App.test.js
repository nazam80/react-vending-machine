import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders vending machine title', () => {
  const { getByText } = render(<App />);
  const headerElement = getByText(/My vending machine/i);
  expect(headerElement).toBeInTheDocument();
});
