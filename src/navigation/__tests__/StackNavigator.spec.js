import React from "react";
import { NavigationContianer } from '@react-navigation/native';
import { render, screen, fireEvent } from '@testing-library/react-native';
import { StackNavigator } from '../StackNavigator';
import { NavigationContainer } from '@react-navigation/native';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('Stack Navigator', () => {
  const data = [
    {
      id: 1,
      name: "Roger",
      favouriteFood: "bananas",
      age: 4,
      neighbourhood: "North Vancouver"
    },
    {
      id: 2,
      name: "Joey",
      favouriteFood: "pizza",
      age: 4,
      neighbourhood: "Richmond"
    },
    {
      id: 3,
      name: "Rumpus",
      favouriteFood: "peanut butter",
      age: 4,
      neighbourhood: "Burnaby"
    },
    {
      id: 4,
      name: "Coco",
      favouriteFood: "cherries",
      age: 4,
      neighbourhood: "DTES"
    },
    {
      id: 5,
      name: "Balloo",
      favouriteFood: "fro-yo",
      age: 4,
      neighbourhood: "East Van"
    },
    {
      id: 6,
      name: "Bing",
      favouriteFood: "pistachios",
      age: 4,
      neighbourhood: "Strathcona"
    }
  ];
  it('should render the HomeScreen on initial render', async () => {
    const NavigationComponent = (
      <NavigationContainer>
        <StackNavigator data={data}/>
      </NavigationContainer>
    )
    render(NavigationComponent);
    const element = await screen.getByText('Neighbourhood Raccoons');
    expect(element).toBeVisible();
  });
  it('should navigate to a given raccoons screen when the screen is pressed', async () => {
    const NavigationComponent = (
      <NavigationContainer>
        <StackNavigator data={data} />
      </NavigationContainer>
    )
    render(NavigationComponent);
    const RogerRaccoon = screen.getByText('Roger');
    fireEvent(RogerRaccoon, 'press');
    const RogerName = await screen.getByText('Roger');
    const RogerFood = await screen.getByText('bananas');
    const RogerNeighbourhood = await screen.getByText('North Vancouver');
    const RogerAge = await screen.getByText('4');
    expect(RogerName).toBeVisible();
    expect(RogerFood).toBeVisible();
    expect(RogerNeighbourhood).toBeVisible();
    expect(RogerAge).toBeVisible();
  });

})