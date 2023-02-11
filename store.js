import { configureStore } from '@reduxjs/toolkit';
import raccoonReducer from './src/slice/raccoonSlice'

export const store = configureStore({
  reducer: {
    raccoon: raccoonReducer,
  },
})