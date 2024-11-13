import styles from './index.module.css';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface SkeletonBookCardListProps {
  cards: number;
}

const SkeletonBookCardList = ({ cards }: SkeletonBookCardListProps) => {
  return (
    <div className={styles.BookCardListSkeleton}>
      {Array(cards)
        .fill(0)
        .map((_, index) => (
          <div className={styles.cardSkeleton} key={index}>
            <div className={styles.imageCardSkeleton}>
              <Skeleton containerClassName="flex-1" width={200} height={200} />
            </div>
            <div className={styles.bookInformSkeleton}>
              <Skeleton width={250} count={3} />
            </div>
          </div>
        ))}
    </div>
  );
};
export default SkeletonBookCardList;
