import { get } from '../services/api';
import { useState, useEffect } from 'react';
import { Book } from '../types';
import { API } from '../constants/api';
import { useParams, useSearchParams } from 'react-router-dom';

const useFetchBook = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { slug } = useParams<{ slug: string }>();
  const [searchParams] = useSearchParams();
  const name = searchParams.get('query');

  useEffect(() => {
    const fetchBookList = async (): Promise<void> => {
      setLoading(true);
      setError(null);

      try {
        let filteredBooks: Book[];

        if (slug) {
          const result = await get<Book>(
            API.BOOKS_ENDPOINT,
            'category',
            `${slug}`
          );
          if ('error' in result) {
            throw new Error(result.error);
          }
          filteredBooks = result || [];
        } else if (name) {
          const result = await get<Book>(
            API.BOOKS_ENDPOINT,
            'title',
            `${name}`
          );
          if ('error' in result) {
            throw new Error(result.error);
          }
          filteredBooks = result || [];
        } else {
          const result = await get<Book>(API.BOOKS_ENDPOINT, '', '');
          if ('error' in result) {
            throw new Error(result.error);
          }
          filteredBooks = result || [];
        }

        setBooks(filteredBooks);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchBookList();
  }, [slug, name]);

  return { books, loading, error };
};

export default useFetchBook;
