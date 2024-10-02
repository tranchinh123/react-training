import styles from './index.module.css';
import { Book } from '../../types';

interface InfoContentSectionProp {
  book: Book;
}

const InfoContentSection = ({ book }: InfoContentSectionProp) => {
  return (
    <div className={styles.infoContentSection}>
      <div className={styles.textInfo}>
        <p className={styles.textInfoItem}>Author:</p>
        <p className={styles.textInfoItem}>Published:</p>
        <p className={styles.textInfoItem}>Publisher:</p>
      </div>
      <div className={styles.infoBook}>
        <p className={styles.infoBookItem}>{book.author}</p>
        <p className={styles.infoBookItem}>{book.publishedYear}</p>
        <p className={styles.infoBookItem}>{book.publisher}</p>
      </div>
    </div>
  );
};

export default InfoContentSection;
