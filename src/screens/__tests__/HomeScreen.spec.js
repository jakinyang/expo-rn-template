import React from "react";
import { render, screen, fireEvent } from '@testing-library/react-native';
import { HomeScreen } from "../HomeScreen";
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from "../../../store";

describe('HomeScreen', () => {
  it('should render the Raccoons title text', () => {
    render(
      <Provider store={store}>
        <NavigationContainer>
          <HomeScreen />
        </NavigationContainer>
      </Provider>
    );
    expect(screen.getByText('Neighbourhood Raccoons')).toBeVisible();
  });
  it('should render a list of Raccoon names', () => {
    render(
      <Provider store={store}>
        <NavigationContainer>
          <HomeScreen />
        </NavigationContainer>
      </Provider>
    );
    const raccoonList = screen.getAllByLabelText('raccoon');

    expect(raccoonList.length).toEqual(6);

  });
})