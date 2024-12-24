import { FC } from 'react';
import { Dashboard } from 'widgets/dashboard';
import { GithubIssues } from 'widgets/github-issues';

export const Issues: FC = function Issues() {
  return (
    <Dashboard>
      <GithubIssues />
    </Dashboard>
  );
};
