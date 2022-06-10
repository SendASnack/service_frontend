import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import IconButton from './IconButton';

describe('<IconButton />', () => {
  test('it should mount', () => {
    render(<IconButton />);
    
    const btn = screen.getByTestId('icon-button');

    expect(btn).toBeInTheDocument();
  });
});