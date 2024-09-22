import DefaultLayout from '../../layouts';
import styles from './index.module.css';
import Arrow2 from '../../components/Icons/Arrow2';
import { Link } from 'react-router-dom';
const DetailPage = () => {
  return (
    <DefaultLayout>
      <div className={styles.detailContentPage}>
        <div className={styles.headerContent}>
          <Link to="/" className={styles.backLink}>
            <Arrow2 />
            <span className={styles.backText}>Back</span>
          </Link>
          <p className={styles.nameBook}>Angels and Demons</p>
        </div>

        <div className={styles.info}>
          <div className={styles.textInfo}>
            <p className={styles.textInfoItem}>Author:</p>
            <p className={styles.textInfoItem}>Published:</p>
            <p className={styles.textInfoItem}>Publisher:</p>
          </div>
          <div className={styles.infoBook}>
            <p className={styles.infoBookItem}>Jamel John</p>
            <p className={styles.infoBookItem}>1996</p>
            <p className={styles.infoBookItem}>Henry Mari</p>
          </div>
        </div>

        <div className={styles.mainContent}>
          <img
            className={styles.imgBook}
            src="https://i.ibb.co/ZSRxJHH/book-1.png"
            alt=""
          />
          <span className={styles.description}>
            Deserunt dolor eiusmod consectetur nisi. Nulla eu sit deserunt
            voluptate voluptate id nisi cillum officia voluptate dolore
            consequat est. Nostrud cupidatat mollit deserunt ea magna anim
            officia anim amet ex pariatur. Proident laborum deserunt tempor aute
            ut est dolor ut nostrud aliquip elit. Excepteur laboris esse sunt
            proident tempor sit. Enim fugiat voluptate et consequat in excepteur
            ut commodo.
          </span>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default DetailPage;
