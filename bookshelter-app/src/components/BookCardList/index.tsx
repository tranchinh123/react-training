import WrappedBookCard from '../BookCard';
import styles from './index.module.css';
import { Book } from '../../types';
import { Link } from 'react-router-dom';

import { withErrorBoundary } from 'react-error-boundary';
import ErrorComponent from '../../error/ErrorBoundary';

interface BooksProps {
  books: Book[];
}

const BookCardList = ({ books }: BooksProps) => {
  return (
    <div className={styles.bookList}>
      {books.map((book) => (
        <Link key={book.id} to={`/detail/${book.id}`}>
          <WrappedBookCard key={book.id} book={book} />
        </Link>
      ))}
    </div>
  );
};

const WrappedBookCardList = withErrorBoundary(BookCardList, {
  FallbackComponent: ErrorComponent,
});

export default WrappedBookCardList;
