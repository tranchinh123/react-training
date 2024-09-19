import arrow from '../../assets/images/Arrow.svg';
import styles from './index.module.css';

interface CategoriesSectionProps {
  currentCategory: string | null;
}
const CategoriesSection = ({ currentCategory }: CategoriesSectionProps) => {
  return (
    <section className={styles.CategoriesSection}>
      <p className={styles.categories}>Categories</p>
      {currentCategory ? (
        <div className={styles.wrapped}>
          <div className={styles.category}>{currentCategory}</div>
          <img src={arrow} alt="" />
          <p>Showing 6 Result(s)</p>
        </div>
      ) : (
        <p></p>
      )}
    </section>
  );
};

export default CategoriesSection;
