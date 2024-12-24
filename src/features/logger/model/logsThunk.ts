import { createAsyncThunk } from '@reduxjs/toolkit';
import { thunkAxiosRequest } from 'shared/api';
import { Log } from './types';

export const fetchLogs = createAsyncThunk<Log[], { page: number }>(
  'logs/fetchLogs',
  async (params, { rejectWithValue }) =>
    thunkAxiosRequest({
      path: `/logger/get-logs/${params.page}`,
      params,
      rejectWithValue,
    }),
);
