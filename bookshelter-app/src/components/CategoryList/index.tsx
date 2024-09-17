import styles from './index.module.css';
import CateGoryItem from '../CategoryItem';
const CategoryList = () => {
  return (
    <>
      <section className={styles.categoryList}>
        <p className={styles.curatedList}>
          A curated list of every book ever written
        </p>
        <CateGoryItem
          category="Adventure"
          quantity={345}
          color=" #0DA8FF;

        "
        />
        <CateGoryItem category="Contemporary" quantity={314} color="#F388B5" />
        <CateGoryItem category="Romance" quantity={134} color="#770DFF" />
        <CateGoryItem category="Fantasy" quantity={234} color="#4F85AC" />
        <CateGoryItem category="Dystopian" quantity={384} color="#14282F" />
        <CateGoryItem category="Mystery" quantity={1344} color="#F1121F" />
      </section>
    </>
  );
};

export default CategoryList;
