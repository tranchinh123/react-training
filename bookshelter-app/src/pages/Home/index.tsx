import BookCardList from '../../components/BookCardList';
import Loading from '../../components/Loading';
import { get } from '../../services/api';
import { useState, useEffect } from 'react';
import { Book } from '../../types/index';
import { API } from '../../constants/api';
import Toast from '../../components/Toast';
import { useParams, useSearchParams } from 'react-router-dom';

const HomePage = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastType, setToastType] = useState<'success' | 'error'>('success');
  const [showToast, setShowToast] = useState(false);
  const { slug } = useParams<{ slug: string }>();
  const [searchParams] = useSearchParams();
  const name = searchParams.get('query');

  useEffect(() => {
    const fetchBookList = async (): Promise<void> => {
      setLoading(true);
      try {
        let filteredBooks: Book[];

        if (slug) {
          const Books = await get<Book>(
            API.BOOKS_ENDPOINT,
            'category',
            `${slug}`
          );
          filteredBooks = Books || [];
        } else if (name) {
          const Books = await get<Book>(API.BOOKS_ENDPOINT, 'title', `${name}`);
          filteredBooks = Books || [];
        } else {
          const Books = await get<Book>(API.BOOKS_ENDPOINT);
          filteredBooks = Books || [];
        }

        setBooks(filteredBooks);
      } catch {
        setToastMessage('Failed to fetch Book');
        setToastType('error');
        setShowToast(true);
      } finally {
        setLoading(false);
      }
    };

    fetchBookList();
  }, [slug, name]);

  const handleCloseToast = () => {
    setShowToast(false);
    setToastMessage(null);
  };

  return (
    <>
      {loading ? <Loading /> : <BookCardList books={books} />}
      {showToast && toastMessage && (
        <Toast
          message={toastMessage}
          type={toastType}
          onClose={handleCloseToast}
        />
      )}
    </>
  );
};

export default HomePage;
