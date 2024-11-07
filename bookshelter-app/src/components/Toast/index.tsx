import { Toast } from '../../types';
import styles from './index.module.css';

const ToastMessage: React.FC<{ toast: Toast }> = ({ toast }) => {
  if (!toast) return null;

  return (
    <div className={styles.toastModal}>
      <div
        className={`${styles.toast} ${toast.type === 'success' ? styles.toastSuccess : styles.toastFailed}`}
      >
        <p className={styles.toastMess}>{toast.message}</p>
      </div>
    </div>
  );
};
export default ToastMessage;
