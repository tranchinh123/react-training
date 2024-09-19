import BookCard from '../BookCard';
import styles from './index.module.css';
// import { get } from '../../services/api';
// import { useState, useEffect } from 'react';
// import { Books } from '../../types/index';
// import { API } from '../../constants/api';

const BookCardList = () => {
  // const [books, setBooks] = useState<Books[]>([]);

  // useEffect(() => {
  //   const loadBookList = async (): Promise<void> => {
  //     const fetchBooks = await get<Books[]>(API.BOOKS_ENDPOINT);
  //     if (fetchBooks) {
  //       console.log(fetchBooks);

  //       setBooks(fetchBooks);
  //     }
  //   };
  //   loadBookList();
  // }, []);

  return (
    <>
      {/* {books.map((book) => {
        <BookCard
          key={book.id}
          name={book.author}
          author={book.author}
          published={book.publishedYear}
          url="https://i.imgur.com/Mx7dA2Y.jpg"
        ></BookCard>;
      })} */}

      <div className={styles.bookList}>
        <BookCard
          name="aaaaa"
          author="aaaaaa"
          published={2023}
          url="https://i.imgur.com/Mx7dA2Y.jpg"
        ></BookCard>
        <BookCard
          name="aaaaa"
          author="aaaaaa"
          published={2023}
          url="https://i.imgur.com/Mx7dA2Y.jpg"
        ></BookCard>
        <BookCard
          name="aaaaa"
          author="aaaaaa"
          published={2023}
          url="https://i.imgur.com/Mx7dA2Y.jpg"
        ></BookCard>
        <BookCard
          name="aaaaa"
          author="aaaaaa"
          published={2023}
          url="https://i.imgur.com/Mx7dA2Y.jpg"
        ></BookCard>
        <BookCard
          name="aaaaa"
          author="aaaaaa"
          published={2023}
          url="https://i.imgur.com/Mx7dA2Y.jpg"
        ></BookCard>
        <BookCard
          name="aaaaa"
          author="aaaaaa"
          published={2023}
          url="https://i.imgur.com/Mx7dA2Y.jpg"
        ></BookCard>
      </div>
    </>
  );
};

export default BookCardList;
