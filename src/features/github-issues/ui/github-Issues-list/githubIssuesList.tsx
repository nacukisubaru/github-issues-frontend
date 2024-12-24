import {
  fetchIssues,
  selectIssues,
  selectIssuesSearchParams,
} from 'entities/issues';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'shared/lib/store';
import { InView } from 'react-intersection-observer';
import { FixedSizeList as List } from 'react-window';
import { GithubIssueItem } from '../github-issue-item/githubIssueItem';

export function GithubIssuesList() {
  const issues = useAppSelector(selectIssues);
  const searchParams = useAppSelector(selectIssuesSearchParams);

  const dispatch = useAppDispatch();
  const [page, setPage] = useState(1);

  const listRef = useRef<HTMLDivElement | null>(null);
  const [listHeight, setListHeight] = useState<number>(0);

  useEffect(() => {
    if (listRef.current) {
      setListHeight(listRef.current.offsetHeight);
    }
  }, []);

  const getNextPage = () => {
    if (searchParams) {
      setPage((prevPage) => prevPage + 1);
      dispatch(fetchIssues({ ...searchParams, page: page + 1 }));
    }
  };

  const getRedirectLink = useCallback(
    (id: number) =>
      `/issue/${id}/?user=${searchParams?.user}&repo=${searchParams?.repo}`,
    [searchParams],
  );

  const renderRow = ({
    index,
    style,
  }: {
    index: number;
    style: React.CSSProperties;
  }) => (
    <InView
      as="div"
      style={{ padding: '2px' }}
      onChange={(inView, _) => {
        if (inView && index === issues.length - 1 && listHeight >= 780) {
          getNextPage();
        }
      }}
    >
      <div style={style}>
        <GithubIssueItem
          id={issues[index].number}
          title={issues[index].title}
          status={issues[index].state}
          date={issues[index].created_at}
          author={issues[index].user.login}
          redirectLink={getRedirectLink(issues[index].number)}
        />
      </div>
    </InView>
  );

  return (
    <div>
      {issues.length > 0 && (
        <div ref={listRef}>
          <List
            height={780}
            itemCount={issues.length}
            itemSize={200}
            width="100%"
          >
            {renderRow}
          </List>

          <InView
            as="div"
            style={{ padding: '2px' }}
            onChange={(inView, _) => inView && getNextPage()}
          />
        </div>
      )}
    </div>
  );
}
