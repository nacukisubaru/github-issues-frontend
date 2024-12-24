import React from 'react';
import { Link } from 'react-router-dom';
import styles from './githubIssueItem.module.scss';

interface GithubIssueItemProps {
  id: number;
  title: string;
  status: string;
  date: string;
  author: string;
  redirectLink: string;
}

export const GithubIssueItem: React.FC<GithubIssueItemProps> =
  function GithubIssueItem({ id, title, status, date, author, redirectLink }) {
    return (
      <div className={styles.issueCard}>
        <Link to={redirectLink} className={styles.issueCard__header}>
          <p className={styles['issueCard__header--text']}>{title}</p>
        </Link>
        <div className={styles.issueCard__info}>
          <div className="info-item">
            Issue ID:
            <span className={styles.issueCard__id}>{id}</span>
          </div>
          <div className="info-item">
            Status:
            <span className={styles.issueCard__status}>{status}</span>
          </div>
          <div className="info-item">
            Date:
            <span className={styles.issueCard__date}>{date}</span>
          </div>
          <div className="info-item">
            Author:
            <span className={styles.issueCard__author}>{author}</span>
          </div>
        </div>
      </div>
    );
  };
