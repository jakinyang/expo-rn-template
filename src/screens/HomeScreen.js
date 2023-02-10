import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

export function HomeScreen({ data }) {

  const navigation = useNavigation();
  return (
    <View>
      <Text>Neighbourhood Raccoons</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate("RaccoonScreen", { data: item })}>
            <View accessibilityLabel='raccoon' >
              <Text>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  )
}