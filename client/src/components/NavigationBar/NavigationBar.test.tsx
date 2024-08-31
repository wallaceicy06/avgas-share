import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NavigationBar from './NavigationBar'
import ContentPage from '../../ContentPage';

describe('<NavigationBar />', () => {
  test('it should mount', () => {
    const fakeSetContentPage = (page: ContentPage) => {};
    
    render(<NavigationBar setContentPage={fakeSetContentPage}/>);

    const element = screen.getByTestId('NavigationBar');

    expect(element).toBeInTheDocument();
  });
});