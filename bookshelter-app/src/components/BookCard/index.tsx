import styles from './index.module.css';
import { Book } from '../../types';
interface BookCardProps {
  book: Book;
  onHandleClick: () => void;
}

const BookCard = ({ book, onHandleClick }: BookCardProps) => {
  return (
    <div className={styles.card} onClick={onHandleClick} id={book.id}>
      <div className={styles.imageCard}>
        <img
          className={styles.imageBook}
          src={book.cover}
          alt="image of the book"
        />
      </div>
      <div className={styles.bookInform}>
        <h2 className={styles.nameBook}>{book.title}</h2>
        <p className={styles.author}>{book.author}</p>
        <p className={styles.published}>{book.publishedYear}</p>
      </div>
    </div>
  );
};
export default BookCard;
