/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';
import { fetchIssue, fetchIssues } from './issuesThunk';
import { IssuesState } from './types';

const initialState: IssuesState = {
  issues: [],
  currentIssue: null,
  status: 'idle',
  error: null,
};

const issuesSlice = createSlice({
  name: 'issues',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchIssues.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchIssues.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.issues = action.payload;
      })
      .addCase(fetchIssues.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload?.message || 'Failed to fetch issues';
      })

      .addCase(fetchIssue.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchIssue.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.currentIssue = action.payload;
      })
      .addCase(fetchIssue.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload?.message || 'Failed to fetch issues';
      });
  },
});

export const issuesReducer = issuesSlice.reducer;
