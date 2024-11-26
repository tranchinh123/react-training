import React from 'react';
import BookCard from '../BookCard';
import styles from './index.module.css';
import { Book } from '../../types';
import { Link } from 'react-router-dom';
import ErrorComponent from '../../error/ErrorComponent';
import ErrorBoundary from '../../error/ErrorBoundary';

interface BooksProps {
  books: Book[];
}

const BookCardList = React.memo(({ books }: BooksProps) => {
  if (books.length === 0) {
    return null;
  }
  return (
    <div className={styles.bookList}>
      {books.map((book) => (
        <Link key={book.id} to={`/detail/${book.id}`}>
          <ErrorBoundary fallback={<ErrorComponent />}>
            <BookCard key={book.id} book={book} />
          </ErrorBoundary>
        </Link>
      ))}
    </div>
  );
});

export default BookCardList;
