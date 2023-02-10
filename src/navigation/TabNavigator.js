import { View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { HomeScreen } from '../screens/HomeScreen'
import { AboutScreen } from '../screens/AboutScreen'

const Tab = createBottomTabNavigator();

export function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName='Home'
    >
      <Tab.Screen
        name='Home'
        component={HomeScreen}
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