import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import React from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';

export function RaccoonScreen() {
  const route = useRoute();
  const navigation = useNavigation()
  const { data } = route.params
  return (
    <SafeAreaView className="flex-1">
      <View className="items-center mt-10">
        <View accessibilityLabel='raccoon'>
          <Text className="text-2xl font-semibold text-gray-500">Name: {data.name}</Text>
          <Text className="text-2xl font-semibold text-gray-500">Age: {data.age}</Text>
          <Text className="text-2xl font-semibold text-gray-500">Favourite Food: {data.favouriteFood}</Text>
          <Text className="text-2xl font-semibold text-gray-500">Neighbourhood: {data.neighbourhood}</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        className="absolute top-16 left-5"
      >
        <Text accessibilityLabel='Back' className="text-xl font-bold text-gray-500">X</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}