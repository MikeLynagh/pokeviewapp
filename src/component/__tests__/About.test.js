

import React from 'react';
import {render, cleanup} from '@testing-library/react';
import { screen } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';
import About from "../About"

test('should render About component', () => {
    render(<About />);
    const AboutElement = screen.getByTestId('About');
    expect(AboutElement).toHaveTextContent('This is a web app that displays the original 150 Pokemon.The front end was built using React JS.The backend was built using express and Node.jsThe database for this web application is stored on MongoDB Atlas')
   
})
