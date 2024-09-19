import arrow from '../../assets/images/Arrow.svg';
import styles from './index.module.css';
const CategoriesSection = () => {
  return (
    <section className={styles.CategoriesSection}>
      <p className={styles.categories}>Categories</p>
      <div className={styles.wrapped}>
        <div className={styles.category}>Romance</div>
        <img src={arrow} alt="" />
        <p>Showing 6 Result(s)</p>
      </div>
    </section>
  );
};

export default CategoriesSection;
