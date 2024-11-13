import SkeletonHeaderContent from '../SkeletonHeaderContent';
import SkeletonInfoContent from '../SkeletonInfoContent';
import SkeletonMainContent from '../SkeletonMainContent';
import styles from './index.module.css';
const SkeletonDetailPage = () => {
  return (
    <div className={styles.contentSection}>
      <SkeletonHeaderContent />
      <SkeletonInfoContent />
      <SkeletonMainContent />
    </div>
  );
};
export default SkeletonDetailPage;
