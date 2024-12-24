import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoadedReducersState } from './types';

const initialState: LoadedReducersState = {
  reducers: [],
};

const loadedReducersSlice = createSlice({
  name: 'loadedReducers',
  initialState,
  reducers: {
    addReducer: (state, action: PayloadAction<string>) => {
      state.reducers.push(action.payload);
    },
  },
});

export const { addReducer } = loadedReducersSlice.actions;
export const loadedReducersReducer = loadedReducersSlice.reducer;
