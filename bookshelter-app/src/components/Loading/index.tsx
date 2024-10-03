import styles from './index.module.css';

const Loading = () => {
  return (
    <div className={styles.Modal}>
      <div className={styles.Loader}></div>
    </div>
  );
};

export default Loading;
