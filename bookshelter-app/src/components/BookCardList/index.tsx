import BookCard from '../BookCard';
import styles from './index.module.css';
import { get } from '../../services/api';
import { useState, useEffect } from 'react';
import { Books } from '../../types/index';
import { API } from '../../constants/api';

const BookCardList = () => {
  const [books, setBooks] = useState<Books[]>([]);

  useEffect(() => {
    const fetchBookList = async (): Promise<void> => {
      const listBooks = await get<Books[]>(API.BOOKS_ENDPOINT);
      if (listBooks) {
        setBooks(listBooks);
      }
    };
    fetchBookList();
  }, []);

  return (
    <div className={styles.bookList}>
      {books.map((book) => (
        <BookCard
          key={book.id}
          name={book.author}
          author={book.author}
          published={book.publishedYear}
          url="https://i.imgur.com/Mx7dA2Y.jpg"
        />
      ))}
    </div>
  );
};

export default BookCardList;
