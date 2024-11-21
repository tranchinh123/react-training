import styles from './index.module.css';
import Header from '../components/Header';
import CategoriesSection from '../components/CategoriesSection';
import Loading from '../components/Loading';
import { useState, useCallback, lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import useFetchCategories from '../hooks/useFetchCategories';
<<<<<<< HEAD
import { useToast } from '../hooks/useToast';
=======
import SkeletonBookCategoryList from '../components/Skeleton/SkeletonBookCategoryList';

const CategoryList = lazy(() => import('../components/CategoryList'));
>>>>>>> eb894425c8bf3ed1b5cc4f744599c9cc41314fbb

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
      <Suspense fallback={<SkeletonBookCategoryList bookCategory={8} />}>
        <CategoryList
          categories={categories}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
      </Suspense>

      <section className={styles.content}>
        <Outlet />
      </section>
    </>
  );
};

export default DefaultLayout;
