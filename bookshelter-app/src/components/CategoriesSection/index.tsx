import arrow from '../../assets/images/Arrow.svg';
import styles from './index.module.css';
const CategoriesSection = () => {
  return (
    <section className={styles.CategoriesSection}>
      <p>Categories</p>
      <div>
        <img src={arrow} alt="" />
        <p>Showing 6 Result(s)</p>
      </div>
    </section>
  );
};

export default CategoriesSection;
