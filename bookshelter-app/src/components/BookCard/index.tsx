import styles from './index.module.css';
import { Book } from '../../types';
import { withErrorBoundary } from 'react-error-boundary';
import ErrorComponent from '../../error/ErrorBoundary';
import React from 'react';
interface BookCardProps {
  book: Book;
}

const BookCard = React.memo(({ book }: BookCardProps) => {
  return (
    <div className={styles.card} id={book.id}>
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
});

const WrappedBookCard = withErrorBoundary(BookCard, {
  FallbackComponent: ErrorComponent,
});

export default WrappedBookCard;
