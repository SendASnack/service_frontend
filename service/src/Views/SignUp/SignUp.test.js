import { render, screen } from '@testing-library/react';
import SignUp from './SignUp';

test('renders learn react link', () => {
  const {getByTestId} = render(<SignUp />);
  expect(getByTestId("sign-up-header")).toBeInTheDocument(); // check if SignUp component contains SignUpHeader
});