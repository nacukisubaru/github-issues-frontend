import React from 'react';
import styles from './logsItem.module.scss';

interface LogsItemProps {
  ip: string;
  method: string;
  path: string;
  timestamp: string;
  onClick?: () => void;
}

export const LogsItem: React.FC<LogsItemProps> = ({
  ip,
  method,
  path,
  timestamp,
  onClick,
}) => {
  return (
    <div className={styles.logCard}>
      <a className={styles.logCard__header} onClick={onClick}>
        {method} {path}
      </a>
      <div className={styles.logCard__info}>
        <div className="info-item">
          IP: <span className={styles.logCard__ip}>{ip}</span>
        </div>
        <div className="info-item">
          Method: <span className={styles.logCard__method}>{method}</span>
        </div>
        <div className="info-item">
          Path: <span className={styles.logCard__path}>{path}</span>
        </div>
        <div className="info-item">
          Timestamp: <span className={styles.logCard__timestamp}>{timestamp}</span>
        </div>
      </div>
    </div>
  );
};
