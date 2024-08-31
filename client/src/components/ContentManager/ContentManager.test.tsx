import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContentManager from './ContentManager';

describe('<ContentManager />', () => {
  test('it should mount', () => {
    render(<ContentManager contentPage='Airplanes' />);

    const contentManager = screen.getByTestId('ContentManager');

    expect(contentManager).toBeInTheDocument();
  });
});