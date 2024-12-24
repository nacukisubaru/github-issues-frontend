import { combineReducers, configureStore, Reducer } from '@reduxjs/toolkit';
import { logsReducer } from 'features/logger';
import { loadedReducersReducer } from '../model/loadedReducersSlice';

const asyncReducers: Record<string, Reducer> = {
  loadedReducersReducer,
  logsReducer,
};

const makeStore = () =>
  configureStore({
    reducer: combineReducers(asyncReducers),
  });

export const store = makeStore();

export const loadReducer = (name: string, reducer: Reducer) => {
  if (asyncReducers[name]) {
    return;
  }

  asyncReducers[name] = reducer;

  store.replaceReducer(combineReducers(asyncReducers));
};
