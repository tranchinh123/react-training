import styles from './index.module.css';
import Arrow from '../Icons/Arrow';

interface CategoriesSectionProps {
  currentCategory: string | null;
  currentTotalBook: number | null;
}
const CategoriesSection = ({
  currentCategory,
  currentTotalBook,
}: CategoriesSectionProps) => {
  return (
    <section className={styles.CategoriesSection}>
      <p className={styles.categories}>Categories</p>
      {currentCategory && (
        <div className={styles.wrapped}>
          <div className={styles.category}>{currentCategory}</div>
          <Arrow />
          <p className={styles.showQuantity}>
            Showing {currentTotalBook} Result(s)
          </p>
        </div>
      )}
    </section>
  );
};

export default CategoriesSection;
