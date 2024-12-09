import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styles from './index.module.css';

const SkeletonCommentSection = () => {
  return (
    <div>
      <div className={styles.userCommentSkeleton} data-testid="skeleton-item">
        <div className={styles.CommentsSkeleton}>
          <Skeleton
            circle
            width={40}
            height={40}
            style={{ marginRight: '10px' }}
          />
          <div>
            <Skeleton width={65} height={15} />
            <Skeleton width={300} height={15} />
          </div>
        </div>
        <div className={styles.CommentsSkeleton}>
          <Skeleton
            circle
            width={40}
            height={40}
            style={{ marginRight: '10px' }}
          />
          <div>
            <Skeleton width={65} height={15} />
            <Skeleton width={300} height={15} />
          </div>
        </div>
        <div className={styles.CommentsSkeleton}>
          <Skeleton
            circle
            width={40}
            height={40}
            style={{ marginRight: '10px' }}
          />
          <div>
            <Skeleton width={65} height={15} />
            <Skeleton width={300} height={15} />
          </div>
        </div>
      </div>

      <div className={styles.leaveCommentSkeleton}>
        <Skeleton
          width={300}
          height={30}
          style={{ marginBottom: '15px', borderRadius: '5px' }}
        />

        <Skeleton width={65} style={{ marginBottom: ' 10px' }} />
        <Skeleton width={320} height={40} style={{ marginBottom: '15px' }} />
        <Skeleton width={65} style={{ marginBottom: ' 10px' }} />
        <Skeleton width={320} height={40} style={{ marginBottom: '15px' }} />
        <Skeleton width={107} height={35} />
      </div>
    </div>
  );
};
export default SkeletonCommentSection;
