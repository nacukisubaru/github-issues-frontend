import { createAsyncThunk } from '@reduxjs/toolkit';
import { thunkAxiosRequest } from 'shared/api';
import { FetchIssueParams, FetchIssuesParams, Issue } from './types';

export const fetchIssues = createAsyncThunk<Issue[], FetchIssuesParams>(
  'issues/fetchIssues',
  async (params, { rejectWithValue }) => {
    return await thunkAxiosRequest({
      path: '/github-issues/issues',
      params,
      rejectWithValue,
    });
  },
);

export const fetchIssue = createAsyncThunk<Issue, FetchIssueParams>(
  'issues/fetchIssue',
  async (params, { rejectWithValue }) => {
    return await thunkAxiosRequest({
      path: '/github-issues/issue',
      params,
      rejectWithValue,
    });
  },
);
