import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getByID } from '../services/api';
import { Book } from '../types';
import { API } from '../constants/api';
import { useToast } from './useToast';

const useFetchABook = () => {
  const { id } = useParams<{ id: string }>();
  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState(true);
  const { showToast } = useToast();

  useEffect(() => {
    const fetchBookDetail = async (): Promise<void> => {
      setLoading(true);
      try {
        if (id) {
          const book = await getByID(API.BOOKS_ENDPOINT, id, showToast);
          if (book) {
            setBook(book);
          }
        }
      } catch (error) {
        console.error('Failed to fetch books:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchBookDetail();
  }, [id, showToast]);

  return { book, loading };
};

export default useFetchABook;
