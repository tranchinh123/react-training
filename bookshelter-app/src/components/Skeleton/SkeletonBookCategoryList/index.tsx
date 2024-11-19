import styles from './index.module.css';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface bookCategorySkeletonProps {
  bookCategory: number;
}
const SkeletonBookCategoryList = ({
  bookCategory,
}: bookCategorySkeletonProps) => {
  return (
    <section className={styles.categoryListSkeleton}>
      <div className={styles.curatedListSkeleton}>
        <Skeleton width={240} height={20} />
      </div>
      {Array(bookCategory)
        .fill(0)
        .map((_, index) => (
          <div className={styles.categoryItemSkeleton} key={index}>
            <Skeleton circle width={40} height={40} />
            <Skeleton width={120} />
            <Skeleton width={20} />
          </div>
        ))}
    </section>
  );
};
export default SkeletonBookCategoryList;
