import styles from './index.module.css';
import BookCategory from '../BookCategory';
const CategoryList = () => {
  return (
    <>
      <section className={styles.categoryList}>
        <p className={styles.curatedList}>
          A curated list of every book ever written
        </p>
        <BookCategory
          category="Adventure"
          quantity={345}
          color=" #0DA8FF;

        "
        />
        <BookCategory category="Contemporary" quantity={314} color="#F388B5" />
        <BookCategory category="Romance" quantity={134} color="#770DFF" />
        <BookCategory category="Fantasy" quantity={234} color="#4F85AC" />
        <BookCategory category="Dystopian" quantity={384} color="#14282F" />
        <BookCategory category="Mystery" quantity={1344} color="#F1121F" />
      </section>
    </>
  );
};

export default CategoryList;
