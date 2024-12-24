import { createSelector } from '@reduxjs/toolkit';
import { LogsState } from './types';

const selectLogsBase = createSelector(
  (state: RootState) => state,
  (state: RootState) => state.logsReducer,
);

export const selectLogs = createSelector(
  selectLogsBase,
  (state: LogsState) => state.logs,
);

export const selectStatusLogs = createSelector(
  selectLogsBase,
  (state: LogsState) => state.status,
);
