import BookCard from '../BookCard';
import styles from './index.module.css';
import { Book } from '../../types';
import { useNavigate } from 'react-router-dom';

interface BooksProps {
  books: Book[];
}

const BookCardList = ({ books }: BooksProps) => {
  const navigate = useNavigate();

  const onHandleClick = (book: Book) => {
    navigate(`/detail/${book.id}`);
  };

  return (
    <div className={styles.bookList}>
      {books.map((book) => (
        <BookCard
          key={book.id}
          id={book.id}
          cover={book.cover}
          title={book.title}
          author={book.author}
          publishedYear={book.publishedYear}
          onHandleClick={() => onHandleClick(book)}
        />
      ))}
    </div>
  );
};

export default BookCardList;
