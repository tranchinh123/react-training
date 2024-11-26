import React from 'react';
import styles from './index.module.css';
import { Book } from '../../types';
import isEqual from 'react-fast-compare';
interface BookCardProps {
  book: Book;
}

const areEqual = (prevProps: BookCardProps, nextProps: BookCardProps) => {
  return isEqual(prevProps.book, nextProps.book);
};

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
}, areEqual);

export default BookCard;
