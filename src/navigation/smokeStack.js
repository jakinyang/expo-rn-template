import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SmokeScreen1 } from '../screens/smokeScreen';

const Stack = createNativeStackNavigator();

export function SmokeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="SmokeScreen1"
        component={SmokeScreen1}
      />
    </Stack.Navigator>
  )
}