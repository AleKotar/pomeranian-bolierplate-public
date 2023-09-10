import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import testSlice from './Features/testSlice';
import CounterSlice from './Features/CounterSlice';

export const store = configureStore({
  reducer: {
    test: testSlice,
    counter: CounterSlice,
  },
});
