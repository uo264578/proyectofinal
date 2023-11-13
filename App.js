// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Futbol from './screens/Futbol';
import Baloncesto from './screens/Baloncesto';
import Tenis from './screens/Tenis';
import CarrerasCaballos from './screens/CarrerasCaballos';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Futbol" component={Futbol} />
        <Stack.Screen name="Baloncesto" component={Baloncesto} />
        <Stack.Screen name="Tenis" component={Tenis} />
        <Stack.Screen name="CarrerasCaballos" component={CarrerasCaballos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

