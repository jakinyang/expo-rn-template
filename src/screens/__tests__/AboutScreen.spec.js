import React from "react";
import { render, screen, fireEvent } from '@testing-library/react-native';
import { AboutScreen } from "../AboutScreen";
import { NavigationContainer } from '@react-navigation/native';

describe('AboutScreen', () => {
  it('should render the About title', () => {
    render(
      <NavigationContainer>
        <AboutScreen />
      </NavigationContainer>
    );
    expect(screen.getByText('About Raccoon App')).toBeVisible();
  });

  it('should render the lorem text', () => {
    const lorem = "Poutine tattooed cold-pressed deep v hell of, butcher tousled health goth pour-over. Craft beer thundercats meditation lumbersexual glossier four loko fit whatever humblebrag retro mixtape mustache palo santo kogi. Tumeric edison bulb poutine ennui squid put a bird on it. DSA ethical brunch sriracha cliche ennui. Pok pok typewriter taiyaki readymade. Unicorn hashtag readymade, ethical yes plz lomo asymmetrical tattooed sus mukbang photo booth intelligentsia PBR&B coloring book retro."
    render(
      <NavigationContainer>
        <AboutScreen />
      </NavigationContainer>
    );
    expect(screen.getByText(lorem)).toBeVisible();
  });
})