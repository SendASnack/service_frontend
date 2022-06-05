import { render, screen } from '@testing-library/react';
import SignUpHeader from './SignUpHeader';

test('renders learn react link', () => {
  render(<SignUpHeader />);
  const linkElement = screen.getByText(/Sign Up/);
  expect(linkElement).toBeInTheDocument();
});