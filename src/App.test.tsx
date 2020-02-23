import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App helloMessage="Say hello Eronn !" />);
  const linkElement = getByText(/Eronn/i);
  expect(linkElement).toBeInTheDocument();
});
