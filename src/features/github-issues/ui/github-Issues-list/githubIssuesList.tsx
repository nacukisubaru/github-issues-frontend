import { fetchIssues, selectIssues, selectIssuesSearchParams } from 'entities/issues';
import { FC, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'shared/lib/store';
import GithubIssueItem from '../github-issue-item/githubIssueItem';
import styles from './githubIssuesList.module.scss';
import { InView } from 'react-intersection-observer';
import { FixedSizeList as List } from 'react-window';

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
  };

  // This function renders an individual issue item
  const renderRow = ({ index, style }: { index: number, style: React.CSSProperties }) => {
    const issue = issues[index];
    console.log(`Rendering issue: ${issue.number}`);
    return (
      <div className="mb-5" style={style}>
        <GithubIssueItem
          id={issue.number}
          title={issue.title}
          status={issue.state}
          date={issue.created_at}
          author={issue.user.login}
        />
      </div>
    );
  };

  return (
    <div className={styles['issues-list']}>
      {issues.length > 0 && (
        <>
          {/* Virtualized list */}
          <List
            height={780} // Height of the container
            itemCount={issues.length}
            itemSize={175} // Height of each item
            width="100%" // Full width
          >
            {renderRow}
          </List>

          {/* Infinite scrolling */}
          <InView
            as="div"
            style={{ padding: '2px' }}
            onChange={(inView, _) =>
              inView && getNextPage()
            }
          />
        </>
      )}
    </div>
  );
};
