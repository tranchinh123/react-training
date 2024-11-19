import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styles from './index.module.css';

const SkeletonHeaderContent = () => {
  return (
    <div className={styles.headerContentSectionSkeleton}>
      <Skeleton width={70} height={20} style={{ marginRight: '25px' }} />
      <Skeleton width={1000} height={30} />
    </div>
  );
};
export default SkeletonHeaderContent;
