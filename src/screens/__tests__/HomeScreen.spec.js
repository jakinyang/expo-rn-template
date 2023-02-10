import React from "react";
import { render, screen, fireEvent } from '@testing-library/react-native';
import { HomeScreen } from "../HomeScreen";
import { NavigationContainer } from '@react-navigation/native';

describe('HomeScreen', () => {
  it('should render the Raccoons title text', () => {
    render(
      <NavigationContainer>
        <HomeScreen />
      </NavigationContainer>
    );
    expect(screen.getByText('Neighbourhood Raccoons')).toBeVisible();
  });
  it('should render a list of Raccoon names', () => {
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

    render(
      <NavigationContainer>
        <HomeScreen data={data}/>
      </NavigationContainer>
    );
    const raccoonList = screen.getAllByLabelText('raccoon');

    expect(raccoonList.length).toEqual(6);

  });
})