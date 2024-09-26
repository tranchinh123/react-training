import DefaultLayout from '../../layouts';
import BookCardList from '../../components/BookCardList';
// import Spinner from '../../components/Spin';
import { get } from '../../services/api';
import { useState, useEffect } from 'react';
import { Book } from '../../types/index';
import { API } from '../../constants/api';
import { useParams, useNavigate } from 'react-router-dom';

const HomePage = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const { slug, name } = useParams<{ slug: string; name: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBookList = async (): Promise<void> => {
      setLoading(true);
      try {
        const listBooks = await get<Book[]>(API.BOOKS_ENDPOINT);

        if (listBooks) {
          let filteredBooks: Book[] = listBooks;

          if (slug) {
            const Books = await get<Book[]>(
              API.BOOKS_ENDPOINT,
              'category',
              `${slug}`
            );
            filteredBooks = Books || [];
          } else if (name) {
            const Books = await get<Book[]>(
              API.BOOKS_ENDPOINT,
              'title',
              `${name}`
            );
            filteredBooks = Books || [];
          }
          if (filteredBooks.length === 0) {
            navigate('*');
          } else {
            setBooks(filteredBooks);
          }
        }
      } catch (error) {
        console.error('Failed to fetch books:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookList();
  }, [slug, name, navigate]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return <DefaultLayout>{<BookCardList books={books} />}</DefaultLayout>;
};
export default HomePage;
