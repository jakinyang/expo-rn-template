import React from "react";
import { render, screen } from '@testing-library/react-native';
import { SmokeScreen1, SmokeScreen2, SmokeScreen3 } from "../SmokeScreen";
import { NavigationContainer } from '@react-navigation/native';

describe('SmokeScreen 1', () => {
  it('should render with text of SmokeScreen 1', () => {
    const ScreenComponent = (
      <NavigationContainer>
        <SmokeScreen1 />
      </NavigationContainer>
    )
    
    render(ScreenComponent);
    expect(screen.getByText('SmokeScreen1')).toBeVisible();
  });
  it('should render with text of SmokeScreen 2', () => {
    const ScreenComponent = (
      <NavigationContainer>
        <SmokeScreen2 />
      </NavigationContainer>
    )
    render(ScreenComponent);
    expect(screen.getByText('SmokeScreen2')).toBeVisible();
  });
  it('should render with text of SmokeScreen 3', () => {
    const ScreenComponent = (
      <NavigationContainer>
        <SmokeScreen3 />
      </NavigationContainer>
    )
    render(ScreenComponent);
    expect(screen.getByText('SmokeScreen3')).toBeVisible();
  });
})
