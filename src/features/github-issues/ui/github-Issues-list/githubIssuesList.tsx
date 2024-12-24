import {
  fetchIssues,
  selectIssues,
  selectIssuesSearchParams,
} from 'entities/issues';
import { FC, useCallback, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'shared/lib/store';
import { InView } from 'react-intersection-observer';
import { GithubIssueItem } from '../github-issue-item/githubIssueItem';

export const GithubIssuesList: FC = function GithubIssuesList() {
  const issues = useAppSelector(selectIssues);
  const searchParams = useAppSelector(selectIssuesSearchParams);
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(1);

  const getRedirectLink = useCallback(
    (id: number) =>
      `/issue/${id}/?user=${searchParams?.user}&repo=${searchParams?.repo}`,
    [searchParams],
  );

  const getNextPage = () => {
    if (searchParams) {
      setPage((prevPage) => prevPage + 1);
      dispatch(fetchIssues({ ...searchParams, page: page + 1 }));
    }
  };

  return (
    <div>
      {issues.map((issue) => (
        <div className="mb-5">
          <GithubIssueItem
            id={issue.number}
            title={issue.title}
            status={issue.state}
            date={issue.created_at}
            author={issue.user.login}
            redirectLink={getRedirectLink(issue.number)}
          />
        </div>
      ))}
      {issues.length > 0 && (
        <InView
          as="div"
          style={{ padding: '2px' }}
          onChange={(inView, _) => inView && getNextPage()}
        />
      )}
    </div>
  );
};
