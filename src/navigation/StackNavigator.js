import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RaccoonScreen } from '../screens/RaccoonScreen'
import { HomeScreen } from '../screens/HomeScreen';
const Stack = createNativeStackNavigator();

export function StackNavigator({ data }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='HomeScreen'
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='RaccoonScreen'
        component={RaccoonScreen}
        options={{
          headerShown: false,
        }}
      />

    </Stack.Navigator>
  )
}