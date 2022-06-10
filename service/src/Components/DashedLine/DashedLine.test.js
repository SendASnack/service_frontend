import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DashedLine from './DashedLine';

describe('<DashedLine />', () => {
  test('it should mount', () => {
    render(<DashedLine />);
    
    const line = screen.getByTestId('dashed-line');

    expect(line).toBeInTheDocument();
  });
});