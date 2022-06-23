import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FilterOption from './FilterOption';

describe('<FilterOption />', () => {
  test('it should mount', () => {
    render(<FilterOption />);
    
    const filter = screen.getByTestId('filter-option');

    expect(filter).toBeInTheDocument();
  });
});