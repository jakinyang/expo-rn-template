import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  raccoons: [
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
  ]
};

export const raccoonSlice = createSlice({
  name: 'raccoon',
  initialState,
  reducers: {
    addRaccoon: (state, action) => {
      state.raccoons = [...state.raccoons, action.payload];
    },
    deleteRaccoon: (state, action) => {
      state.raccoons = state.raccoons.filter((item) => item.id !== action.payload.id)
    },
  }
})

export const selectRaccoons = (state) => state.raccoon.raccoons;

export const selectRaccoonById = (state, id) => state.raccoon.raccoonsfilter(item => item.id === id);

export const selectTotalRaccoons = (state) => state.raccoons.raccoonslength;

export const { addRaccoon, deleteRaccoon } = raccoonSlice.actions;
export default raccoonSlice.reducer