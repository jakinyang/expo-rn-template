import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { render, screen, fireEvent } from '@testing-library/react-native';

import { SmokeStack } from "../SmokeStack";

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('Smoke Stack Navigation', () => {
  it('should render smokeStack1 on initial render', () => {
    const NavigationComponent = (
      <NavigationContainer>
        <SmokeStack />
      </NavigationContainer>
    );
    render(NavigationComponent);
    expect(screen.getByText('SmokeScreen1')).toBeVisible();
  });
  it('should render a back button', () => {
    const NavigationComponent = (
      <NavigationContainer>
        <SmokeStack />
      </NavigationContainer>
    );
    render(NavigationComponent);
    expect(screen.getByText('SmokeScreen2')).toBeVisible();
    expect(screen.getByText('SmokeScreen3')).toBeVisible();
  });
})
