import { combineReducers, configureStore, Reducer } from '@reduxjs/toolkit';

import { loadedReducersReducer } from '../model/loadedReducersSlice';

const asyncReducers: Record<string, Reducer> = {
  loadedReducersReducer,
};

const makeStore = () =>
  configureStore({
    reducer: combineReducers(asyncReducers),
  });

export const store = makeStore();

export const loadReducer = (name: string, reducer: Reducer) => {
  if (asyncReducers[name]) {
    console.warn(`Reducer с именем "${name}" уже существует.`);
    return;
  }

  asyncReducers[name] = reducer;

  store.replaceReducer(combineReducers(asyncReducers));
};
