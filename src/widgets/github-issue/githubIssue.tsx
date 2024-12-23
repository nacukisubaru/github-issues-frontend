import { FC, useEffect } from 'react';
import { GithubIssueDetail } from 'features/github-issue-detail';
import { fetchIssue } from 'entities/issues';
import { useAppDispatch, useAppSelector } from 'shared/lib/store';
import { selectIssue } from 'entities/issues/model/selector';

interface GithubIssueProps {
  user: string | null;
  repo: string | null;
  id: string | undefined;
}

export const GithubIssue: FC<GithubIssueProps> = function GithubIssue({
  user,
  repo,
  id,
}) {
  const dispatch = useAppDispatch();
  const issue = useAppSelector(selectIssue);

  useEffect(() => {
    const fetch = async () => {
      if (user && repo && id) {
        dispatch(
          fetchIssue({
            user,
            repo,
            id,
          }),
        );
      }
    };

    fetch();
  }, [dispatch, user, repo, id]);

  return (
    <div>
      {issue && (
        <GithubIssueDetail
          title={issue?.title}
          author={issue?.user.login}
          createdAt={issue?.created_at}
          commentCount={issue?.comments}
          comments={issue?.commentsList}
        />
      )}
    </div>
  );
};
