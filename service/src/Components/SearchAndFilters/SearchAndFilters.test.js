import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SearchAndFilters from './SearchAndFilters';

describe('<SearchAndFilters />', () => {
  test('it should mount', () => {
    render(<SearchAndFilters />);
    
    const searchFilters = screen.getByTestId('search-and-filters');

    expect(searchFilters).toBeInTheDocument();
  });
});