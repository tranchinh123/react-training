import styles from './index.module.css';
import { Book } from '../../types';
interface BookCardProps {
  Book: Book;
  onHandleClick: () => void;
}

const BookCard = ({ Book, onHandleClick }: BookCardProps) => {
  return (
    <div className={styles.card} onClick={onHandleClick} id={Book.id}>
      <div className={styles.imageCard}>
        <img
          className={styles.imageBook}
          src={Book.cover}
          alt="image of the book"
        />
      </div>
      <div className={styles.bookInform}>
        <h2 className={styles.nameBook}>{Book.title}</h2>
        <p className={styles.author}>{Book.author}</p>
        <p className={styles.published}>{Book.publishedYear}</p>
      </div>
    </div>
  );
};
export default BookCard;
