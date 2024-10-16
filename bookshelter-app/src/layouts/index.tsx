import styles from './index.module.css';
import Header from '../components/Header';
import CategoriesSection from '../components/CategoriesSection';
import CategoryList from '../components/CategoryList';
import Loading from '../components/Loading';
import { useState, useEffect } from 'react';
import { Category } from '../types';
import { get } from '../services/api';
import { API } from '../constants/api';
import { Outlet } from 'react-router-dom';

const DefaultLayout = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const fetchCategoriesList = async (): Promise<void> => {
      setLoading(true);
      try {
        const categories = await get<Category>(API.CATEGORIES_ENDPOINT);
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
  }, []);

  const handleClickMenu = () => {
    setIsMenuOpen((pre) => !pre);
  };

  return loading ? (
    <Loading />
  ) : (
    <>
      <Header onClick={handleClickMenu} />
      <CategoriesSection />
      <CategoryList
        categories={categories}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <section className={styles.content}>
        <Outlet />
      </section>
    </>
  );
};

export default DefaultLayout;
