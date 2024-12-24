import React from 'react';
import styles from './githubIssueItem.module.scss';

interface GithubIssueItemProps {
  id: number;
  title: string;
  status: string;
  date: string;
  author: string;
  onClick?: () => void;
}

const GithubIssueItem: React.FC<GithubIssueItemProps> = ({
  id,
  title,
  status,
  date,
  author,
  onClick,
}) => {
  return (
    <div className={styles.issueCard}>
      <a className={styles.issueCard__header} onClick={onClick}>
        {title}
      </a>
      <div className={styles.issueCard__info}>
        <div className="info-item">Issue ID: {id}</div>
        <div className="info-item">
          Status: <span className={styles.issueCard__status}>{status}</span>
        </div>
        <div className="info-item">
          Date: <span className={styles.issueCard__date}>{date}</span>
        </div>
        <div className="info-item">
          Author: <span className={styles.issueCard__author}>{author}</span>
        </div>
      </div>
    </div>
  );
};

export default GithubIssueItem;
