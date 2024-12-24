import { FC } from 'react';
import { Comment } from 'entities/issues';
import styles from './githubIssueDetail.module.scss';
import { GithubIssueComment } from '../issue-comment/githubIssueComment';

interface GithubIssueDetailProps {
  title: string;
  author: string;
  createdAt: string;
  commentCount: number;
  comments: Comment[];
}

export const GithubIssueDetail: FC<GithubIssueDetailProps> =
  function GithubIssueDetail({
    title,
    author,
    createdAt,
    commentCount,
    comments,
  }) {
    return (
      <div className={styles['github-issue-detail']}>
        <h1 className={styles['github-issue-detail__title']}>{title}</h1>
        <div className={styles['github-issue-detail__metadata']}>
          <span>
            Opened by
            {author}
            on
            {new Date(createdAt).toLocaleDateString()}
          </span>
          <span className={styles['github-issue-detail__comment-count']}>
            {commentCount}
            comments
          </span>
        </div>

        <div className={styles['github-issue-detail__comments']}>
          {comments.map((comment) => (
            <GithubIssueComment
              key={comment.id}
              user={comment.user.login}
              text={comment.body}
              createdAt={comment.created_at}
              avatarUrl={comment.user.avatar_url}
            />
          ))}
        </div>
      </div>
    );
  };
