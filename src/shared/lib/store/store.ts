import { combineReducers, configureStore, Reducer } from '@reduxjs/toolkit';

export const makeStore = () =>
  configureStore({
    reducer: {
    },
  });

export const store = makeStore();

export const loadReducer = (
  name: string,
  reducer: Reducer
) => {
  store.replaceReducer(
    combineReducers({
      ...store.getState(),
      [name]: reducer,
    })
  );
};