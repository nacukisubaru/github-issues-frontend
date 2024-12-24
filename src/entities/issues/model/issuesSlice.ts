/* eslint-disable no-param-reassign */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CustomError } from 'shared/api/types';
import { IssueSearchParams, IssuesState } from './types';
import { fetchIssue, fetchIssues } from './issuesThunk';

const initialState: IssuesState = {
  issues: [],
  currentIssue: null,
  searchData: null,
  status: 'idle',
  error: null,
};

const issuesSlice = createSlice({
  name: 'issues',
  initialState,
  reducers: {
    fillSearchParams: (state, action: PayloadAction<IssueSearchParams>) => {
      state.searchData = action.payload;
    },
    resetIssues: (state) => {
      state.issues = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchIssues.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchIssues.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.issues = state.issues.concat(action.payload);
      })
      .addCase(fetchIssues.rejected, (state, action) => {
        state.status = 'failed';
        state.error =
          (action.payload as CustomError)?.message || 'Failed to fetch issues';
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
        state.error =
          (action.payload as CustomError)?.message || 'Failed to fetch issues';
      });
  },
});

export const issuesReducer = issuesSlice.reducer;
export const { fillSearchParams, resetIssues } = issuesSlice.actions;
