import { configureStore } from '@reduxjs/toolkit';
import { issuesReducer } from 'entities/issues';

export const makeStore = () =>
  configureStore({
    reducer: {
      issuesReducer,
    },
  });

export const store = makeStore();
