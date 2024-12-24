import { useCallback } from 'react';
import { Reducer } from '@reduxjs/toolkit';
import { loadReducer } from '../redux/store';
import { addReducer } from '../model/loadedReducersSlice';
import { useAppDispatch, useAppSelector } from '../redux/redux';
import { selectLoadedReducers } from '../model/selector';

export const useAddDynamicReducer = () => {
  const loadedReducers = useAppSelector(selectLoadedReducers);
  const dispatch = useAppDispatch();

  const registerReducer = useCallback(
    (name: string, reducer: Reducer) => {
      dispatch(addReducer(name));
      loadReducer(name, reducer);
    },
    [dispatch],
  );

  return {
    registerReducer,
    loadedReducers,
  };
};
