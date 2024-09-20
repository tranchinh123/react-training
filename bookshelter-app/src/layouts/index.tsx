import styles from './index.module.css';
import Header from '../components/Header';
import CategoriesSection from '../components/CategoriesSection';
import CategoryList from '../components/CategoryList';
import { useState, useEffect } from 'react';
import { Categories } from '../types';
import { get } from '../services/api';
import { API } from '../constants/api';
interface LayoutProps {
  children: React.ReactNode;
}

const DefaultLayout = ({ children }: LayoutProps) => {
  const [categories, setCategories] = useState<Categories[]>([]);
  const [currentCategory, setCurrentCategory] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategoriesList = async (): Promise<void> => {
      const Categories = await get<Categories[]>(API.CATEGORIES_ENDPOINT);
      if (Categories) setCategories(Categories);
    };

    fetchCategoriesList();
  }, []);

  const handleCategoryClick = (categoryName: string) => {
    setCurrentCategory(categoryName);
  };

  return (
    <>
      <Header />
      <CategoriesSection currentCategory={currentCategory} />
      <CategoryList categories={categories} onClick={handleCategoryClick} />
      <section className={styles.content}>{children}</section>
    </>
  );
};

export default DefaultLayout;
