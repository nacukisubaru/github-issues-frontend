import { createAsyncThunk } from "@reduxjs/toolkit";
import { Log } from "./types";
import { thunkAxiosRequest } from "shared/api";

export const fetchLogs = createAsyncThunk<
  Log[],
  {page: number},
  { rejectValue: { message: string } }
>(
  'logs/fetchLogs',
  async (params, { rejectWithValue }) => {
    return await thunkAxiosRequest({
      path: `/logger/get-logs/${params.page}`,
      params,
      rejectWithValue
    });
  }
);