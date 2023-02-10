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
  it('should render buttons for SmokeScreen 1 + 2', () => {
    const NavigationComponent = (
      <NavigationContainer>
        <SmokeStack />
      </NavigationContainer>
    );
    render(NavigationComponent);
    expect(screen.getByText('SS2')).toBeVisible();
    expect(screen.getByText('SS3')).toBeVisible();
  });
  it('should navigate to SmokeScreen2 when the button is pushed', async () => {
    const NavigationComponent = (
      <NavigationContainer>
        <SmokeStack />
      </NavigationContainer>
    );

    render(NavigationComponent);
    const SS2Button = await screen.getByText('SS2');
    fireEvent(SS2Button, 'press');
    const SS2Text = await screen.getByText("SmokeScreen2");
    expect(SS2Text).toBeVisible();
  });
  it('should navigate to SmokeScreen3 when the button is pushed', async () => {
    const NavigationComponent = (
      <NavigationContainer>
        <SmokeStack />
      </NavigationContainer>
    );

    render(NavigationComponent);
    const SS3Button = await screen.getByText('SS3');
    fireEvent(SS3Button, 'press');
    const SS3Text = await screen.getByText("SmokeScreen3");
    expect(SS3Text).toBeVisible();
  });
  it('should navigate back to SmokeScreen1 when the back button is pushed from SmokeScreen2', async () => {
    const NavigationComponent = (
      <NavigationContainer>
        <SmokeStack />
      </NavigationContainer>
    );

    render(NavigationComponent);
    const SS2Button = await screen.getByText('SS2');
    fireEvent(SS2Button, 'press');
    const back = await screen.getByText('Back');
    fireEvent(back, 'press');
    const SS1Text = await screen.getByText('SmokeScreen1');
    expect(SS1Text).toBeVisible();
  });
  it('should navigate back to SmokeScreen1 when the back button is pushed from SmokeScreen3', async () => {
    const NavigationComponent = (
      <NavigationContainer>
        <SmokeStack />
      </NavigationContainer>
    );

    render(NavigationComponent);
    const SS3Button = await screen.getByText('SS3');
    fireEvent(SS3Button, 'press');
    const back = await screen.getByText('Back');
    fireEvent(back, 'press');
    const SS1Text = await screen.getByText('SmokeScreen1');
    expect(SS1Text).toBeVisible();
  });
})
