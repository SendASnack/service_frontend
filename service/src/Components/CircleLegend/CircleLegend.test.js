import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CircleLegend from './CircleLegend';

describe('<CircleLegend />', () => {
  test('it should mount', () => {
    render(<CircleLegend />);
    
    const circle = screen.getByTestId('circle-legend');

    expect(circle).toBeInTheDocument();
  });
});