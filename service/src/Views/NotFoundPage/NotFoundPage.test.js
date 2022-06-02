import { render, screen } from '@testing-library/react';
import NotFoundPage from './NotFoundPage';

test('renders learn react link', () => {
  render(<NotFoundPage />);
  const linkElement = screen.getByText(/Page not found!/);
  expect(linkElement).toBeInTheDocument();
});