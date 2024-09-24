import styles from './index.module.css';
const SearchBookItem = () => {
  return (
    <div className={styles.resultList}>
      <div className={styles.bookItem}>
        <img
          className={styles.image}
          src="https://i.ibb.co/ZSRxJHH/book-1.png"
          alt=""
        />
        <p>Angles and demons 1</p>
      </div>
      <div className={styles.bookItem}>
        <img
          className={styles.image}
          src="https://i.ibb.co/ZSRxJHH/book-1.png"
          alt=""
        />
        <p>Angles and demons 1</p>
      </div>
      <div className={styles.bookItem}>
        <img
          className={styles.image}
          src="https://i.ibb.co/ZSRxJHH/book-1.png"
          alt=""
        />
        <p>Angles and demons 1</p>
      </div>
    </div>
  );
};
export default SearchBookItem;
