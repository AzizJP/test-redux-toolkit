import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {Counter} from '../../types/types';

const initialState: Counter = {
  count: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state, action: PayloadAction<number>) {
      state.count += action.payload;
    },
    decrement(state, action: PayloadAction<number>) {
      state.count -= action.payload;
    },
  },
});

export default counterSlice.reducer;
