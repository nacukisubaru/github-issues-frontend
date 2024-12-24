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
      <div
        className={styles.logCard__header}
        onClick={onClick}
      >
        {method}
        {path}
      </div>
      <div className={styles.logCard__info}>
        <div className={styles['info-item']}>
          <span className='mr-1'>IP:</span>
          <span className={styles.logCard__ip}>{ip}</span>
        </div>
        <div className={styles['info-item']}>
          <span className='mr-1'>Method:</span>
          <span className={styles.logCard__method}>{method}</span>
        </div>
        <div className={styles['info-item']}>
          <span className='mr-1'>Path:</span>
          <span className={styles.logCard__path}>{path}</span>
        </div>
        <div className={styles['info-item']}>
          <span className='mr-1'>Timestamp:</span>
          <span className={styles.logCard__timestamp}>{new Date(timestamp).toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};
