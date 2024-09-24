import DefaultLayout from '../../layouts';
// import BookCardList from '../../components/BookCardList';
// import { get } from '../../services/api';
// import { useState, useEffect } from 'react';
// import { Book } from '../../types/index';
// import { API } from '../../constants/api';
const HomePage = () => {
  // const [books, setBooks] = useState<Book[]>([]);

  // useEffect(() => {
  //   const fetchBookList = async (): Promise<void> => {
  //     const listBooks = await get<Book[]>(API.BOOKS_ENDPOINT);
  //     if (listBooks) {
  //       setBooks(listBooks);
  //     }
  //   };
  //   fetchBookList();
  // }, []);

  return <DefaultLayout>{/* <BookCardList books={books} /> */}</DefaultLayout>;
};
export default HomePage;
