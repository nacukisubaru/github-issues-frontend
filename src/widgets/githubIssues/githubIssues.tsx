import { GithubIssuesList } from "features/github-issues";
import { GithubIssuesSearch } from "features/github-issues-search";
import { FC } from "react";
import { useAddDynamicReducer } from "shared/lib/store";

export const GithubIssues: FC = function GithubIssues() {
  const { loadedReducers } = useAddDynamicReducer();

  return (
    <>
      <GithubIssuesSearch />

      {loadedReducers.includes('issuesReducer') && (
        <GithubIssuesList />
      )}
    </>
  );
}