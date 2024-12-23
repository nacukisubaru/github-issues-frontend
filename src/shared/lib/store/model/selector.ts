import { createSelector } from "@reduxjs/toolkit";
import { LoadedReducersState } from "./types";

const selectLoadedReducersBase = (state: RootState) => state.loadedReducersReducer;

export const selectLoadedReducers = createSelector(
  selectLoadedReducersBase,
  (state: LoadedReducersState) => state.reducers
);