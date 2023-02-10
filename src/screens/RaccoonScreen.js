import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';

export function RaccoonScreen({ data, route }) {

  const raccoonInfo = data ? data : route.params
  return (
    <View>
      <View accessibilityLabel='raccoon'>
        <Text>{raccoonInfo.name}</Text>
        <Text>{raccoonInfo.age}</Text>
        <Text>{raccoonInfo.favouriteFood}</Text>
        <Text>{raccoonInfo.neighbourhood}</Text>
      </View>
      <TouchableOpacity>
        <Text accessibilityLabel='Back'>X</Text>
      </TouchableOpacity>
    </View>
  )
}