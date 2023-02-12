import { View, Text, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectRaccoons } from '../slice/raccoonSlice'

export function HomeScreen({ data }) {
  const raccoons = useSelector((state) => selectRaccoons(state));
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1">
      <View className="items-center flex-1">
        <Text className="text-2xl font-semibold text-gray-500">Neighbourhood Raccoons</Text>
        <FlatList
          className="mt-5"
          data={raccoons}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("RaccoonScreen", { data: item })}
              className="my-2"
            >
              <View accessibilityLabel='raccoon' >
                <Text className="text-3xl text-gray-500 font-semibold">{item.name}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  )
}