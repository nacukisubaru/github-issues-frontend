/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';
import { LogsState } from './types';
import { fetchLogs } from './logsThunk';

const initialState: LogsState = {
  logs: [],
  status: 'idle',
  error: null,
};

const logsSlice = createSlice({
  name: 'logs',
  initialState,
  reducers: {
    clearLogs: (state) => {
      state.logs = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLogs.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchLogs.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.logs = state.logs.concat(action.payload);
      })
      .addCase(fetchLogs.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload?.message || 'Failed to fetch logs';
      });
  },
});

export const logsReducer = logsSlice.reducer;
export const { clearLogs } = logsSlice.actions;
