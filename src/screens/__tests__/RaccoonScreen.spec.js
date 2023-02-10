import React from "react";
import { render, screen, fireEvent } from '@testing-library/react-native';
import { RaccoonScreen } from "../RaccoonScreen";

describe('RaccoonScreen', () => {
  data = {
      id: 1,
      name: "Roger",
      favouriteFood: "bananas",
      age: 4,
      neighbourhood: "North Vancouver"
    };

  it('should render information about the raccoon data for that page in the title', () => {
    render(<RaccoonScreen data={data}/>);
    expect(screen.getByText('Roger')).toBeVisible();
    expect(screen.getByText('4')).toBeVisible();
    expect(screen.getByText('bananas')).toBeVisible();
    expect(screen.getByText('North Vancouver')).toBeVisible();
  });
  it('should render a back button', () => {
    render(<RaccoonScreen data={data} />);
    expect(screen.getByLabelText('Back')).toBeVisible();
  });
})