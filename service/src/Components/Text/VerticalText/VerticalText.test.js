import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import VerticalText from './VerticalText';

describe('<VerticalText />', () => {
  test('it should mount', () => {
    render(<VerticalText />);
    
    const verticalText = screen.getByTestId('vertical-text');

    expect(verticalText).toBeInTheDocument();
  });
});