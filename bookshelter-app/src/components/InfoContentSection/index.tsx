import styles from './index.module.css';
import { Book } from '../../types';

interface InfoContentSectionProp {
  book: Book;
}

const InfoContentSection = ({ book }: InfoContentSectionProp) => {
  return (
    <div className={styles.InfoContentSection}>
      <div className={styles.TextInfo}>
        <p className={styles.TextInfoItem}>Author:</p>
        <p className={styles.TextInfoItem}>Published:</p>
        <p className={styles.TextInfoItem}>Publisher:</p>
      </div>
      <div className={styles.InfoBook}>
        <p className={styles.InfoBookItem}>{book.author}</p>
        <p className={styles.InfoBookItem}>{book.publishedYear}</p>
        <p className={styles.InfoBookItem}>{book.publisher}</p>
      </div>
    </div>
  );
};

export default InfoContentSection;
