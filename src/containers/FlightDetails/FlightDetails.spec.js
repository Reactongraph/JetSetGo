import React from 'react';
import { screen } from '@testing-library/react-native';
import { render } from '@testing-library/react-native';

import FlightDetails from './FlightDetails.js';


const Data={params:{flight:{"id":"1","fare":3840,"displayData":{"source":{"airport":{"cityCode":"DEL","cityName":"Delhi","terminal":"3","airportCode":"DEL","airportName":"Indira Gandhi Airport","countryCode":"IN","countryName":"India"},"depTime":"2023-03-31T06:20"},"airlines":[{"airlineCode":"AB","airlineName":"JetSpice","flightNumber":"1234"}],"stopInfo":"Non stop","destination":{"airport":{"cityCode":"BOM","cityName":"Mumbai","terminal":"2","airportCode":"BOM","airportName":"Mumbai","countryCode":"IN","countryName":"India"},"arrTime":"2023-03-31T08:40"},"totalDuration":"2h 20m"}}}}


describe('FlightDetails', () => {
 it('renders succesfully', () => {
    const testId = 'flight-details'; 

    const { getByTestId } = render(<FlightDetails />); 
    
    const yourComponent = getByTestId(testId);
    
    expect(yourComponent).toBeTruthy();
    
  });
 
  it('checking airline name', () => {
    const testId = 'flight-details-airlineName'; 
    const airlineName="JetSpice";

    const { getByTestId } = render(<FlightDetails route={Data} />); 
    
    const yourComponent = getByTestId(testId);
    expect(yourComponent.props.children).toBe(airlineName);
    
  });
});
