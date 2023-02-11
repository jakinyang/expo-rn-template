import React from "react";
import { render, screen, fireEvent } from '@testing-library/react-native';
import { RaccoonScreen } from "../RaccoonScreen";
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from "../../../store";

jest.mock('@react-navigation/native')
import { useRoute } from '@react-navigation/native';

describe('RaccoonScreen', () => {
  data = {
    id: 1,
    name: "Roger",
    favouriteFood: "bananas",
    age: 4,
    neighbourhood: "North Vancouver"
  };

  it.skip('should render information about the raccoon data for that page in the title', async () => {
    useRoute.mockReturnValue({
      data,
    });
    render(
      <NavigationContainer>
        <RaccoonScreen />
      </NavigationContainer>
    );
    expect(screen.getByText('Roger')).toBeVisible();
    expect(screen.getByText('4')).toBeVisible();
    expect(screen.getByText('bananas')).toBeVisible();
    expect(screen.getByText('North Vancouver')).toBeVisible();
  });
  it.skip('should render a back button', () => {
    useRoute.mockReturnValue({
      data,
    });
    render(
      <Provider store={store}>
        <NavigationContainer>
          <RaccoonScreen />
        </NavigationContainer>
      </Provider>
    );
    expect(screen.getByLabelText('Back')).toBeVisible();
  });
})