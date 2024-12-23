import { createAsyncThunk } from '@reduxjs/toolkit';
import { thunkAxiosRequest } from 'shared/api';
import { FetchIssuesParams, Issue } from './types';

export const fetchIssues = createAsyncThunk<Issue[], FetchIssuesParams>(
  'issues/fetchIssues', async (params, { rejectWithValue }) => {
  return await thunkAxiosRequest({
    path: '/github-issues/issues',
    params,
    rejectWithValue,
  });
});
