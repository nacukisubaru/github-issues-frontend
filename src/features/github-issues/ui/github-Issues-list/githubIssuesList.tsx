import { selectIssues } from 'entities/issues';
import { FC } from 'react';
import { useAppSelector } from 'shared/lib/store';
import GithubIssueItem from '../github-issue-item/githubIssueItem';

export const GithubIssuesList: FC = function GithubIssuesList() {
  const issues = useAppSelector(selectIssues);

  return (
    <>
      {issues.map((issue) => (
        <GithubIssueItem
          id={issue.number}
          title={issue.title}
          status={issue.state}
          date={issue.created_at}
          author={issue.user.login}
        />
      ))}
    </>
  );
};
