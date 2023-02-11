import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { render, screen, fireEvent } from '@testing-library/react-native';
import { TabNavigator } from "../TabNavigator";
import { Provider } from 'react-redux';
import { store } from "../../../store";
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('Tab Navigator', () => {
  it('should render a tab navigator', () => {
    const NavigationComponent = (
      <Provider store={store}>
        <NavigationContainer>
          <TabNavigator />
        </NavigationContainer>
      </Provider>
    )

    render(NavigationComponent);
    expect(screen.getByText('Home')).toBeVisible();
    expect(screen.getByText('About')).toBeVisible()
  });
  it('should render the HomeScreen initially', () => {
    const NavigationComponent = (
      <Provider store={store}>
        <NavigationContainer>
          <TabNavigator />
        </NavigationContainer>
      </Provider>
    )
    render(NavigationComponent);
    expect(screen.getByText('Neighbourhood Raccoons')).toBeVisible();
  });
  it('should navigate to the About tab when the button is pressed', async () => {
    const NavigationComponent = (
      <Provider store={store}>
        <NavigationContainer>
          <TabNavigator />
        </NavigationContainer>
      </Provider>
    )
    render(NavigationComponent);
    const AboutButton = screen.getByText('About');
    fireEvent(AboutButton, 'press');
    const AboutText = await screen.getByText('About Raccoon App');
    expect(AboutText).toBeVisible();
  });
  it('should navigate back to Homescreen from the About screen when the back button is pressed.', async () => {
    const NavigationComponent = (
      <Provider store={store}>
        <NavigationContainer>
          <TabNavigator />
        </NavigationContainer>
      </Provider>
    )
    render(NavigationComponent);
    const AboutButton = screen.getByText('About');
    fireEvent(AboutButton, 'press');
    const BackButton = await screen.getByLabelText('Back');
    fireEvent(BackButton, 'press');
    const HomeScreenText = await screen.getByText("Neighbourhood Raccoons");
    expect(HomeScreenText).toBeVisible();
  });
})