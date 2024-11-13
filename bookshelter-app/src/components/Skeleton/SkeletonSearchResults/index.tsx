import Skeleton from 'react-loading-skeleton';
import styles from './index.module.css';
import 'react-loading-skeleton/dist/skeleton.css';

const SkeletonSearchResults = () => {
  return (
    <div className={styles.resultListSkeleton}>
      {Array(4)
        .fill(0)
        .map((_, i) => (
          <div className={styles.bookItemSkeleton} key={i}>
            <Skeleton width={45} height={45} style={{ marginRight: '20px' }} />
            <Skeleton width={550} height={30} />
          </div>
        ))}
    </div>
  );
};
export default SkeletonSearchResults;
