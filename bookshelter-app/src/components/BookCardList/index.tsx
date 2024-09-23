import BookCard from '../BookCard';
import styles from './index.module.css';
import { Book } from '../../types';
import { useNavigate } from 'react-router-dom';

interface booksProps {
  books: Book[];
}
const BookCardList = ({ books }: booksProps) => {
  const navigate = useNavigate();

  return (
    <div className={styles.bookList}>
      {books.map((book) => (
        <BookCard
          key={book.id}
          id={book.id}
          title={book.title}
          author={book.author}
          published={book.publishedYear}
          cover={book.cover}
          onHandleClick={() => navigate(`/detail/${book.id}`)}
        />
      ))}
    </div>
  );
};

export default BookCardList;
