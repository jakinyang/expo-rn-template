import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SmokeScreen1, SmokeScreen2, SmokeScreen3 } from '../screens/smokeScreen';

const Stack = createNativeStackNavigator();

export function SmokeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="SmokeScreen1"
        component={SmokeScreen1}
      />
      <Stack.Screen 
        name="SmokeScreen2"
        component={SmokeScreen2}
      />
      <Stack.Screen 
        name="SmokeScreen3"
        component={SmokeScreen3}
      />

    </Stack.Navigator>
  )
}