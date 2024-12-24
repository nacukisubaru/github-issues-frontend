import {
  fetchIssues,
  selectIssues,
  selectIssuesSearchParams,
} from 'entities/issues';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from 'shared/lib/store';
import { InView } from 'react-intersection-observer';
import { FixedSizeList as List } from 'react-window';
import { useNavigate } from 'react-router-dom';
import styles from './githubIssuesList.module.scss';
import { GithubIssueItem } from '../github-issue-item/githubIssueItem';

export function GithubIssuesList() {
  const issues = useAppSelector(selectIssues);
  const searchParams = useAppSelector(selectIssuesSearchParams);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [page, setPage] = useState(1);

  const getNextPage = () => {
    if (searchParams) {
      setPage((prevPage) => prevPage + 1);
      dispatch(fetchIssues({ ...searchParams, page: page + 1 }));
    }
  };

  const redirectToDetail = (id: number) => () => {
    if (searchParams) {
      navigate(
        `/issue/${id}/?user=${searchParams?.user}&repo=${searchParams?.repo}`,
      );
    }
  };

  const renderRow = ({
    index,
    style,
  }: {
    index: number;
    style: React.CSSProperties;
  }) => {
    const issue = issues[index];
    return (
      <div className="mb-5" style={style}>
        <GithubIssueItem
          id={issue.number}
          title={issue.title}
          status={issue.state}
          date={issue.created_at}
          author={issue.user.login}
          onClick={redirectToDetail(issue?.number)}
        />
      </div>
    );
  };

  return (
    <div className={styles['issues-list']}>
      {issues.length > 0 && (
        <>
          <List
            height={780}
            itemCount={issues.length}
            itemSize={175}
            width="100%"
          >
            {renderRow}
          </List>

          <InView
            as="div"
            style={{ padding: '2px' }}
            onChange={(inView, _) => inView && getNextPage()}
          />
        </>
      )}
    </div>
  );
}
