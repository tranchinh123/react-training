import styles from './index.module.css';
import Header from '../components/Header';
import CategoriesSection from '../components/CategoriesSection';
import Loading from '../components/Loading';
import { useState, useCallback, lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import useFetchCategories from '../hooks/useFetchCategories';
import SkeletonBookCategory from '../components/Skeleton/SkeletonBookCategoryList/SkeletonBookCategory';

const CategoryList = lazy(() => import('../components/CategoryList'));

const DefaultLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClickMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const { categories, loading } = useFetchCategories();

  return loading ? (
    <Loading />
  ) : (
    <>
      <Header onClick={handleClickMenu} />
      <CategoriesSection />
      <Suspense fallback={<SkeletonBookCategory bookCategory={8} />}>
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
