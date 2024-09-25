import DefaultLayout from '../../layouts';
import BookCardList from '../../components/BookCardList';
import { get } from '../../services/api';
import { useState, useEffect } from 'react';
import { Book } from '../../types/index';
import { API } from '../../constants/api';
import { useParams } from 'react-router-dom';
const HomePage = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const { slug } = useParams<{ slug: string }>();

  useEffect(() => {
    const fetchBookList = async (): Promise<void> => {
      const listBooks = await get<Book[]>(API.BOOKS_ENDPOINT);
      if (listBooks) {
        if (slug) {
          const booksWithSameSlug = listBooks.filter(
            (book) => book.category === slug
          );
          setBooks(booksWithSameSlug);
        } else {
          setBooks(listBooks);
        }
      }
    };
    fetchBookList();
  }, [slug]);

  return <DefaultLayout>{<BookCardList books={books} />}</DefaultLayout>;
};
export default HomePage;
