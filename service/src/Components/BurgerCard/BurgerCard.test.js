import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BurgerCard from './BurgerCard';

describe('<BurgerCard />', () => {
  test('it should mount', () => {
    render(<BurgerCard />);
    
    const burgerCard = screen.getByTestId('burger-card');

    expect(burgerCard).toBeInTheDocument();
  });
});