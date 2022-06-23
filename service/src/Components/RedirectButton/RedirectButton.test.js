import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RedirectButton from './RedirectButton';

describe('<RedirectButton />', () => {
  test('it should mount', () => {
    render(<RedirectButton />);
    
    const btn = screen.getByTestId('redirect-button');

    expect(btn).toBeInTheDocument();
  });
});