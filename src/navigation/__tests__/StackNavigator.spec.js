import React from "react";
import { NavigationContianer } from '@react-navigation/native';
import { render, screen, fireEvent } from '@testing-library/react-native';
import { StackNavigator } from '../StackNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from "../../../store";

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('Stack Navigator', () => {
  it('should render the HomeScreen on initial render', async () => {
    const NavigationComponent = (
      <Provider store={store}>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </Provider>
    )
    render(NavigationComponent);
    const element = await screen.getByText('Neighbourhood Raccoons');
    expect(element).toBeVisible();
  });
  it('should navigate to a given raccoons screen when the screen is pressed', async () => {
    const NavigationComponent = (
      <Provider store={store}>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </Provider>
    )
    render(NavigationComponent);
    const RogerRaccoon = screen.getByText('Roger');
    fireEvent(RogerRaccoon, 'press');
    const RogerFood = await screen.getByText('bananas');
    const RogerNeighbourhood = await screen.getByText('North Vancouver');
    const RogerAge = await screen.getByText('4');
    expect(RogerFood).toBeVisible();
    expect(RogerNeighbourhood).toBeVisible();
    expect(RogerAge).toBeVisible();
  });

})