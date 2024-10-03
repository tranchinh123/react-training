import styles from './index.module.css';
import { Book } from '../../types';

interface BookCardProps {
  book: Book;
  onHandleClick: () => void;
}

const BookCard = ({ book, onHandleClick }: BookCardProps) => {
  return (
    <div className={styles.Card} onClick={onHandleClick} id={book.id}>
      <div className={styles.ImageCard}>
        <img
          className={styles.ImageBook}
          src={book.cover}
          alt="image of the book"
        />
      </div>
      <div className={styles.BookInform}>
        <h2 className={styles.NameBook}>{book.title}</h2>
        <p className={styles.Author}>{book.author}</p>
        <p className={styles.Published}>{book.publishedYear}</p>
      </div>
    </div>
  );
};
export default BookCard;
