import { get } from '../services/api';
import { useState, useEffect } from 'react';
import { Book } from '../types';
import { API } from '../constants/api';
import { useParams, useSearchParams } from 'react-router-dom';
import { useToast } from './useToast';

const useFetchBook = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const { showToast } = useToast();

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
            `${slug}`,
            showToast
          );
          filteredBooks = Books || [];
        } else if (name) {
          const Books = await get<Book>(
            API.BOOKS_ENDPOINT,
            'title',
            `${name}`,
            showToast
          );
          filteredBooks = Books || [];
        } else {
          const Books = await get<Book>(API.BOOKS_ENDPOINT, '', '', showToast);
          filteredBooks = Books || [];
        }

        setBooks(filteredBooks);
      } catch {
        console.log('Fail to fetch data ');
      } finally {
        setLoading(false);
      }
    };

    fetchBookList();
  }, [slug, name, showToast]);

  return { books, loading };
};

export default useFetchBook;
