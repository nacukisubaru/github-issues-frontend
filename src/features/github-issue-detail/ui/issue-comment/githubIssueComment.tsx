import styles from './githubIssueComment.module.scss';

interface GithubIssueCommentProps {
  user: string;
  avatarUrl: string;
  text: string;
  createdAt: string;
}

export function GithubIssueComment({
  user,
  avatarUrl,
  text,
  createdAt,
}: GithubIssueCommentProps) {
  return (
    <div className={styles['github-issue-comment']}>
      <img
        src={avatarUrl}
        alt={user}
        className={styles['github-issue-comment__avatar']}
      />
      <div className={styles['github-issue-comment__content']}>
        <div className={styles['github-issue-comment__header']}>
          <span className={styles['github-issue-comment__user']}>{user}</span>
          <span className={styles['github-issue-comment__metadata']}>
            commented on
            {new Date(createdAt).toLocaleString()}
          </span>
        </div>
        <div className={styles['github-issue-comment__body']}>{text}</div>
      </div>
    </div>
  );
}
