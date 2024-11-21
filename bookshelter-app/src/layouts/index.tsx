import styles from './index.module.css';
import Header from '../components/Header';
import CategoriesSection from '../components/CategoriesSection';
import CategoryList from '../components/CategoryList';
import Loading from '../components/Loading';
import { useState, useCallback } from 'react';
import { Outlet } from 'react-router-dom';
import useFetchCategories from '../hooks/useFetchCategories';
import { useToast } from '../hooks/useToast';

const DefaultLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { showToast } = useToast();

  const handleClickMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const { categories, loading, error } = useFetchCategories();
  if (error) {
    showToast('Failed to fetch data', 'error');
  }
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
