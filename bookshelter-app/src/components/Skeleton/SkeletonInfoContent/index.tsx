import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styles from './index.module.css';

const SkeletonInfoContent = () => {
  return (
    <div className={styles.infoContentSection} data-testid="skeleton-item">
      <div className={styles.textInfo}>
        <Skeleton width={68} height={25} style={{ marginBottom: '10px' }} />
        <Skeleton width={68} height={25} style={{ marginBottom: '10px' }} />
        <Skeleton width={68} height={25} />
      </div>
      <div className={styles.infoBook}>
        <Skeleton width={130} height={23} style={{ marginBottom: '10px' }} />
        <Skeleton width={130} height={23} style={{ marginBottom: '15px' }} />
        <Skeleton width={130} height={23} />
      </div>
    </div>
  );
};
export default SkeletonInfoContent;
