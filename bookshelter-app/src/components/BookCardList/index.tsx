import BookCard from '../BookCard';
import styles from './index.module.css';
import { Book } from '../../types';
import { Link } from 'react-router-dom';

interface BooksProps {
  books: Book[];
}

const BookCardList = ({ books }: BooksProps) => {
  return (
    <div className={styles.bookList}>
      {books.map((book) => (
        <Link key={book.id} to={`/detail/${book.id}`}>
          <BookCard key={book.id} book={book} />
        </Link>
      ))}
    </div>
  );
};

export default BookCardList;
