import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders mockview header', () => {
  const { getByText } = render(<App />);
  const headerElement = getByText('Mockview: mocks, with a view');
  expect(headerElement).toBeInTheDocument();
});
