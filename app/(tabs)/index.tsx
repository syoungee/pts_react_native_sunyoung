import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'; // 스택 네비게이션 추가
import MainScreen from '../../components/MainScreen'; // MainScreen 임포트
import AOSPage from '../../components/AOSPage'; // AOSPage 임포트
import IOSPage from '../../components/IOSPage'; // IOSPage 임포트

const Stack = createStackNavigator();

export default function App() {
  return (
    <Stack.Navigator initialRouteName="HOME">
      <Stack.Screen name="HOME" component={MainScreen} options={{ headerShown: false }} />
      <Stack.Screen name="AOSPage" component={AOSPage} options={{ headerShown: false }} />
      <Stack.Screen name="IOSPage" component={IOSPage} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
