import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SignUp from './SignUp';

test('renders learn react link', () => {
  const {getByTestId} = render(<SignUp />);
  expect(getByTestId("sign-up-header")).toBeInTheDocument(); // check if SignUp component contains SignUpHeader
});

test('I have a submit button', () => {
  const {getByTestId} = render(<SignUp />);
  expect(getByTestId("submit-button")).toBeInTheDocument(); // check if SignUp component contains a Submit Button
});