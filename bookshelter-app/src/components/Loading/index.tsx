import styles from './index.module.css';
const Loading = () => {
  return (
    <div className={styles.modal}>
      <div className={styles.loader}></div>
    </div>
  );
};
export default Loading;
