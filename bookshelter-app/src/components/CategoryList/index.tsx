import styles from './index.module.css';
import BookCategory from '../BookCategory';

const CategoryList = () => {
  const handleClick = () => {
    console.log('abc');
  };

  return (
    <>
      <section className={styles.categoryList}>
        <p className={styles.curatedList}>
          A curated list of every book ever written
        </p>
        <BookCategory
          category="Adventure"
          quantity={345}
          onHandleClick={handleClick}
        />
      </section>
    </>
  );
};

export default CategoryList;
