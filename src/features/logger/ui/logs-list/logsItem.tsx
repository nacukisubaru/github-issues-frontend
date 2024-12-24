import React from 'react';
import styles from './logsItem.module.scss';

interface LogsItemProps {
  ip: string;
  method: string;
  path: string;
  timestamp: string;
  onClick?: () => void;
}

export const LogsItem: React.FC<LogsItemProps> = function LogsItem({
  ip,
  method,
  path,
  timestamp,
  onClick,
}) {
  return (
    <div className={styles.logCard}>
      <button
        className={styles.logCard__header}
        onClick={onClick}
        aria-label={`Click to view details of ${method} ${path}`}
      >
        {method} {path}
      </button>
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
          Timestamp:
          <span className={styles.logCard__timestamp}>{timestamp}</span>
        </div>
      </div>
    </div>
  );
};
