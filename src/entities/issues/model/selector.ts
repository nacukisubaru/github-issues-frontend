import { createSelector } from '@reduxjs/toolkit';
import { IssuesState } from './types';

const selectIssuesBase = createSelector(
	(state: RootState) => state,
	(state: RootState) => state.issuesReducer,
);

export const selectIssues = createSelector(
	selectIssuesBase,
	(state: IssuesState) => state.issues,
);

export const selectIssue = createSelector(
	selectIssuesBase,
	(state: IssuesState) => state.currentIssue,
);

