import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NativeBaseProvider } from "native-base";

import Flights from './src/containers/Flights';
import FlightDetails from './src/containers/FlightDetails';

const Stack = createStackNavigator();

function App(): React.JSX.Element {

  useEffect(() => {
    SplashScreen.hide();
  }, [])

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Flight" component={Flights} options={{ headerShown: false }} />
          <Stack.Screen name="FlightDetails" component={FlightDetails} options={{
            headerTitleAlign: 'center',
            headerTitle: 'Flight Details',
            headerBackgroundContainerStyle: { height: 65 }
          }} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;