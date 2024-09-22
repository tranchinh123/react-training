import DefaultLayout from '../../layouts';
import Glass from '../../components/Icons/Glass';
import styles from './index.module.css';
const NotFound = () => {
  return (
    <DefaultLayout>
      <div className={styles.NotFoundPage}>
        <Glass size={39} />
        <p className={styles.text}>No results found</p>
      </div>
    </DefaultLayout>
  );
};
export default NotFound;
