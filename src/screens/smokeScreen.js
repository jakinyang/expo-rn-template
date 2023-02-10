import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export function SmokeScreen1() {
  const navigation = useNavigation();

  return (
    <View>
      <Text>SmokeScreen1</Text>
      <Button
        title='SS2'
        onPress={() => { navigation.navigate('SmokeScreen2') }}
      />
      <Button
        title='SS3'
        onPress={() => { navigation.navigate('SmokeScreen3') }}
      />
    </View>
  )
}

export function SmokeScreen2() {
  const navigation = useNavigation();
  return (
    <View>
      <Text>SmokeScreen2</Text>
      <Button
        title='Back'
        onPress={() => { navigation.goBack() }}
      />
    </View>
  )
}

export function SmokeScreen3() {
  const navigation = useNavigation();
  return (
    <View>
      <Text>SmokeScreen3</Text>
      <Button
        title='Back'
        onPress={() => { navigation.goBack() }}
      />
    </View>
  )
}