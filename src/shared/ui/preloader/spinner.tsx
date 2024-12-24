import styles from './styles.module.scss';

export function Spinner() {
  return (
    <div className={styles.preloader}>
      <div className={styles.spinner} />
    </div>
  );
}
