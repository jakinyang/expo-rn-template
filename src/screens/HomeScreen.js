import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectRaccoons } from '../slice/raccoonSlice'

export function HomeScreen({ data }) {
  const raccoons = useSelector((state) => selectRaccoons(state));
  const navigation = useNavigation();
  return (
    <View>
      <Text>Neighbourhood Raccoons</Text>
      <FlatList
        data={raccoons ? raccoons : data}
        keyExtractor={item => item.id}
        renderItem={(item) => (
          <TouchableOpacity onPress={() => navigation.navigate("RaccoonScreen", { data: item })}>
            <View accessibilityLabel='raccoon' >
              <Text>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}