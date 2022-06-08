import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ItemShape from './ItemShape';

describe('<ItemShape />', () => {
  test('it should mount', () => {
    render(<ItemShape />);
    
    const itemShape = screen.getByTestId('item-shape');

    expect(itemShape).toBeInTheDocument();
  });
});