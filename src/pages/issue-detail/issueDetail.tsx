import { GithubIssue } from 'widgets/github-issue';
import { useParams, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useAddDynamicReducer } from 'shared/lib/store';
import { issuesReducer } from 'entities/issues';
import { Dashboard } from 'widgets/dashboard';

export function IssueDetail() {
  const { id } = useParams();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const { registerReducer, loadedReducers } = useAddDynamicReducer();

  const user = searchParams.get('user');
  const repo = searchParams.get('repo');

  useEffect(() => {
    registerReducer('issuesReducer', issuesReducer);
  }, []);

  return (
    <>
      <Dashboard>
        {loadedReducers.includes('issuesReducer') && (
          <GithubIssue user={user} repo={repo} id={id} />
        )}
      </Dashboard>
    </>
  );
}
