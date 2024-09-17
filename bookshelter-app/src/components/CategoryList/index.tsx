import styles from './index.module.css';
import CateGoryItem from '../CategoryItem';
const CategoryList = () => {
  return (
    <>
      <section className={styles.categoryList}>
        <p className={styles.curatedList}>
          A curated list of every book ever written
        </p>
        <CateGoryItem category="Adventure" quantity={345} />
      </section>
    </>
  );
};

export default CategoryList;
