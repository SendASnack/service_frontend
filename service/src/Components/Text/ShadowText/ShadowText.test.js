import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ShadowText from './ShadowText';

describe('<ShadowText />', () => {
  test('it should mount', () => {
    render(<ShadowText />);
    
    const shadowText = screen.getByTestId('shadow-text');

    expect(shadowText).toBeInTheDocument();
  });
});