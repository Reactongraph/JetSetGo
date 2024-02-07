import React from 'react';
import { render } from '@testing-library/react-native';

import Flights from './Flights.js';



describe('Flights', () => {
 it('renders succesfully', () => {
    const testId = 'flights'; 

    const { getByTestId } = render(<Flights />); 
    
    const yourComponent = getByTestId(testId);
    
    expect(yourComponent).toBeTruthy();
    
  });
 
});
