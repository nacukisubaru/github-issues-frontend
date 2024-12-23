import { selectIssues } from "entities/issues";
import { FC } from "react";

import { useAppSelector } from "shared/lib/store";
export const GithubIssuesList: FC = function GithubIssuesList() {
  const issues = useAppSelector(selectIssues);

  return (
    <>
      {issues.map(issue =>
        <div>{issue.title}</div>
      )}
    </>
  );
}
