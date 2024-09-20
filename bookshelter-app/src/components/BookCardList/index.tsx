import BookCard from '../BookCard';
import styles from './index.module.css';

interface book {
  id: string;
  title: string;
  author: string;
  publishedYear: number;
  cover: string;
}

interface booksProps {
  books: book[];
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
