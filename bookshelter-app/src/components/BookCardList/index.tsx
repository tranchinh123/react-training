import BookCard from '../BookCard';
import styles from './index.module.css';
import { Book } from '../../types';

interface booksProps {
  books: Book[];
}
const BookCardList = ({ books }: booksProps) => {
  return (
    <div className={styles.bookList}>
      {books.map((book) => (
        <BookCard
          key={book.id}
          title={book.title}
          author={book.author}
          published={book.publishedYear}
          cover={book.cover}
        />
      ))}
    </div>
  );
};

export default BookCardList;
