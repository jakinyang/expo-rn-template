import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';

export function RaccoonScreen() {
  const route = useRoute();
  const navigation = useNavigation()
  const { data } = route.params
  console.log(data);
  console.log(data.name);
  return (
    <View>
      <View accessibilityLabel='raccoon'>
        <Text>{data.name}</Text>
        <Text>{data.age}</Text>
        <Text>{data.favouriteFood}</Text>
        <Text>{data.neighbourhood}</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text accessibilityLabel='Back'>X</Text>
      </TouchableOpacity>
    </View>
  )
}