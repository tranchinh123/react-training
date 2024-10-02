import Glass from '../../components/Icons/Glass';
import styles from './index.module.css';
const NotFound = () => {
  return (
    <div className={styles.NotFoundPage}>
      <Glass size={39} />
      <p className={styles.text}>No results found</p>
    </div>
  );
};
export default NotFound;
