import { createAsyncThunk } from '@reduxjs/toolkit';
import { thunkAxiosRequest } from 'shared/api';
import { FetchIssueParams, FetchIssuesParams, Issue } from './types';

export const fetchIssues = createAsyncThunk<Issue[], FetchIssuesParams>(
  'issues/fetchIssues',
  (params, { rejectWithValue }) =>
    thunkAxiosRequest({
      path: '/github-issues/issues',
      params,
      rejectWithValue,
    }),
);

export const fetchIssue = createAsyncThunk<Issue, FetchIssueParams>(
  'issues/fetchIssue',
  (params, { rejectWithValue }) =>
    thunkAxiosRequest({
      path: '/github-issues/issue',
      params,
      rejectWithValue,
    }),
);
