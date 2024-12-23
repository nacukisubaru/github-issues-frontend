import { fetchIssues, selectIssues, selectIssuesSearchParams } from 'entities/issues';
import { FC, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'shared/lib/store';
import GithubIssueItem from '../github-issue-item/githubIssueItem';
import styles from './githubIssuesList.module.scss';
import { InView } from 'react-intersection-observer';

export const GithubIssuesList: FC = function GithubIssuesList() {
  const issues = useAppSelector(selectIssues);
  const searchParams = useAppSelector(selectIssuesSearchParams);
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(1);

  const getNextPage = () => {
    if (searchParams) {
      setPage((prevPage) => prevPage + 1);
      dispatch(fetchIssues({ ...searchParams, page: page + 1 }));
    }
  }

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
      {issues.length > 0 && (
        <InView
          as="div"
          style={{ padding: '2px' }}
          onChange={(inView, _) =>
            inView && getNextPage()
          }
        />
      )}

    </div>
  );
};
