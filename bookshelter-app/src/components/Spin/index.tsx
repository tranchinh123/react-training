import styles from './styles.module.css';

const Spinner = () => {
  return (
    <div className={styles.Spinner}>
      <div className={styles.doubleBounce1}></div>
      <div className={styles.doubleBounce2}></div>
    </div>
  );
};

export default Spinner;
