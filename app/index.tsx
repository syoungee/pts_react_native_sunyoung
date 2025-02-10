import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from '../src/components/MainScreen';
import AOSPage from '../src/components/AOSPage';
import IOSPage from '../src/components/IOSPage';

const Stack = createStackNavigator();

export default function Page() {
  return (
    <Stack.Navigator initialRouteName="HOME">
      <Stack.Screen name="HOME" component={MainScreen} options={{ headerShown: false }} />
      <Stack.Screen name="AOSPage" component={AOSPage} options={{ headerShown: false }} />
      <Stack.Screen name="IOSPage" component={IOSPage} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
