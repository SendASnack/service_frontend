import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ImageButton from './ImageButton';

describe('<ImageButton />', () => {
  test('it should mount', () => {
    render(<ImageButton />);
    
    const imageButton = screen.getByTestId('image-button');

    expect(imageButton).toBeInTheDocument();
  });
});