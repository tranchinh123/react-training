import styles from './index.module.css';
import Arrow from '../Icons/Arrow';

interface CategoriesSectionProps {
  currentCategory: string | null;
}
const CategoriesSection = ({ currentCategory }: CategoriesSectionProps) => {
  return (
    <section className={styles.CategoriesSection}>
      <p className={styles.categories}>Categories</p>
      {currentCategory && (
        <div className={styles.wrapped}>
          <div className={styles.category}>{currentCategory}</div>
          <Arrow />
          <p>Showing 6 Result(s)</p>
        </div>
      )}
    </section>
  );
};

export default CategoriesSection;
