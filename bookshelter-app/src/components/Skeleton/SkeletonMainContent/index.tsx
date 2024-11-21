import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styles from './index.module.css';

const SkeletonMainContent = () => {
  return (
    <>
      <div className={styles.mainContentSection}>
        <Skeleton width={430} height={230} style={{ marginBottom: '20px' }} />
        <Skeleton width={1100} count={4} />
      </div>
      <div className={styles.commentsSection}>
        <div className={styles.Comments}>
          <Skeleton width={150} height={30} style={{ marginRight: '20px' }} />
          <Skeleton width={30} height={30} />
        </div>
      </div>
    </>
  );
};
export default SkeletonMainContent;
