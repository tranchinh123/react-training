import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getByID } from '../services/api';
import { Book } from '../types';
import { API } from '../constants/api';

const useFetchABook = () => {
  const { id } = useParams<{ id: string }>();
  const [result, setResult] = useState<Book | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookDetail = async (): Promise<void> => {
      setLoading(true);
      setError(null);
      try {
        if (id) {
          const result = await getByID(API.BOOKS_ENDPOINT, id);
          if ('error' in result) {
            throw new Error(result.error);
          }
          setResult(result);
        }
      } catch (error) {
        setError(error instanceof Error ? error.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };
    fetchBookDetail();
  }, [id]);

  return { result, loading, error };
};

export default useFetchABook;
