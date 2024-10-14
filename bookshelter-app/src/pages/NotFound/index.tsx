import Glass from '../../components/Icons/Glass';
import styles from './index.module.css';

const NotFound = () => {
  return (
    <div className={styles.notFoundPage}>
      <Glass />
      <p className={styles.text}>No results found</p>
    </div>
  );
};

export default NotFound;
