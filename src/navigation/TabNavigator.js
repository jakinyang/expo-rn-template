import { View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { AboutScreen } from '../screens/AboutScreen';
import { StackNavigator } from '../navigation/StackNavigator'

const Tab = createBottomTabNavigator();

export function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName='Home'
    >
      <Tab.Screen
        name='Home'
        component={StackNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name='About'
        component={AboutScreen}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  )
}