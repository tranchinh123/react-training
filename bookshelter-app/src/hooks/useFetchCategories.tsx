import { useEffect, useState } from 'react';
import { API } from '../constants/api';
import { get } from '../services/api';
import { Category } from '../types';

const useFetchCategories = (slug?: string) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategoriesList = async (): Promise<void> => {
      setLoading(true);
      setError(null);
      try {
        const categories = await get<Category>(
          API.CATEGORIES_ENDPOINT,
          slug ? 'slug' : '',
          slug || ''
        );
        if ('error' in categories) {
          throw new Error(categories.error);
        }
        setCategories(categories);
      } catch (error) {
        setError(error instanceof Error ? error.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };
    fetchCategoriesList();
  }, [slug]);
  return { loading, categories, error };
};
export default useFetchCategories;
