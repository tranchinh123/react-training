import DefaultLayout from '../../layouts';
import BookCardList from '../../components/BookCardList';
import { get } from '../../services/api';
import { useState, useEffect } from 'react';
import { Books } from '../../types/index';
import { API } from '../../constants/api';
const HomePage = () => {
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
    <>
      <DefaultLayout>
        <BookCardList books={books} />
      </DefaultLayout>
    </>
  );
};
export default HomePage;
