import styles from './index.module.css';
import Arrow from '../Icons/Arrow';
import { Book } from '../../types';

interface CategoriesSectionProps {
  currentCategory: string | null;
  currentTotalBook: number | null;
  isFilteredSlug: boolean;
  isFilteredName: boolean;
  books: Book[];
}

const CategoriesSection = ({
  currentCategory,
  currentTotalBook,
  isFilteredSlug,
  isFilteredName,
  books,
}: CategoriesSectionProps) => {
  return (
    <section className={styles.CategoriesSection}>
      <p className={styles.categories}>Categories</p>
      {isFilteredSlug && (
        <div className={styles.wrapped}>
          <div className={styles.category}>{currentCategory}</div>
          <Arrow />
          <p className={styles.showQuantity}>
            Showing {currentTotalBook} Result(s)
          </p>
        </div>
      )}
      {isFilteredName && (
        <div className={styles.wrapped}>
          <p className={styles.showQuantity}>
            Showing {books.length} Result(s)
          </p>
        </div>
      )}
    </section>
  );
};

export default CategoriesSection;
