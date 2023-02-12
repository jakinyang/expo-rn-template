import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import React from 'react';

export function AboutScreen() {
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 items-center pt-8">
        <Text className="text-xl font-semibold text-gray-500">About Raccoon App</Text>
        <Text className="text-gray-500 font-medium text-base mx-3 px-5 mt-5">Poutine tattooed cold-pressed deep v hell of, butcher tousled health goth pour-over. Craft beer thundercats meditation lumbersexual glossier four loko fit whatever humblebrag retro mixtape mustache palo santo kogi. Tumeric edison bulb poutine ennui squid put a bird on it. DSA ethical brunch sriracha cliche ennui. Pok pok typewriter taiyaki readymade. Unicorn hashtag readymade, ethical yes plz lomo asymmetrical tattooed sus mukbang photo booth intelligentsia PBR&B coloring book retro.</Text>
      </View>
    </SafeAreaView>
  )
}