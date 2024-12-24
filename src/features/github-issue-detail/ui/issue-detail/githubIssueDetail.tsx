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
            <span className="mr-1">Opened by</span>
            <span className="mr-1">{author}</span>
            <span className="mr-1">on</span>
            {new Date(createdAt).toLocaleDateString()}
          </span>
          <span className={styles['github-issue-detail__comment-count']}>
            <span className="mr-1">{commentCount}</span>
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
