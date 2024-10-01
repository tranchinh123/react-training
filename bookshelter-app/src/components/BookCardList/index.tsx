import BookCard from '../BookCard';
import styles from './index.module.css';
import { Book } from '../../types';
import { useNavigate } from 'react-router-dom';

interface booksProps {
  books: Book[];
}
const BookCardList = ({ books }: booksProps) => {
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
          title={book.title}
          author={book.author}
          published={book.publishedYear}
          cover={book.cover}
          onHandleClick={() => onHandleClick(book)}
        />
      ))}
    </div>
  );
};

export default BookCardList;
