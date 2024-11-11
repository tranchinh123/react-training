import { useEffect, useState } from 'react';
import { useToast } from './useToast';
import { API } from '../constants/api';
import { get } from '../services/api';
import { Category } from '../types';

const useFetchCategories = (slug?: string) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const { showToast } = useToast();

  useEffect(() => {
    const fetchCategoriesList = async (): Promise<void> => {
      setLoading(true);
      try {
        const categories = await get<Category>(
          API.CATEGORIES_ENDPOINT,
          slug ? 'slug' : '',
          slug || '',
          showToast
        );
        if (categories) {
          setCategories(categories);
        }
      } catch (error) {
        console.error('Failed to fetch categories:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchCategoriesList();
  }, [slug, showToast]);
  return { loading, categories };
};
export default useFetchCategories;
