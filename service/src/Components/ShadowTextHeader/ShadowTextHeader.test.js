import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ShadowTextHeader from './ShadowTextHeader';

describe('<ShadowTextHeader />', () => {
  test('it should mount', () => {
    render(<ShadowTextHeader />);
    
    const text = screen.getByTestId('shadow-text-header');

    expect(text).toBeInTheDocument();
  });
});