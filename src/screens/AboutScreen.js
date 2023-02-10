import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export function AboutScreen() {
  const navigation = useNavigation();
  return (
    <View>
      <Text>About Raccoon App</Text>
      <Text>Poutine tattooed cold-pressed deep v hell of, butcher tousled health goth pour-over. Craft beer thundercats meditation lumbersexual glossier four loko fit whatever humblebrag retro mixtape mustache palo santo kogi. Tumeric edison bulb poutine ennui squid put a bird on it. DSA ethical brunch sriracha cliche ennui. Pok pok typewriter taiyaki readymade. Unicorn hashtag readymade, ethical yes plz lomo asymmetrical tattooed sus mukbang photo booth intelligentsia PBR&B coloring book retro.</Text>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
      >
        <Text accessibilityLabel='Back'>X</Text>
      </TouchableOpacity>
    </View>
  )
}