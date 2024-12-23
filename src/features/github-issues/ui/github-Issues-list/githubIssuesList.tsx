import { selectIssues } from 'entities/issues';
import { FC } from 'react';
import { useAppSelector } from 'shared/lib/store';
import GithubIssueItem from '../github-issue-item/githubIssueItem';
import styles from './githubIssuesList.module.scss';

export const GithubIssuesList: FC = function GithubIssuesList() {
  const issues = useAppSelector(selectIssues);

  return (
    <div className={styles['issues-list']}>
      {issues.map((issue) => (
        <div className='mb-5'>
          <GithubIssueItem
            id={issue.number}
            title={issue.title}
            status={issue.state}
            date={issue.created_at}
            author={issue.user.login}
          />
        </div>
      ))}
    </div>
  );
};
