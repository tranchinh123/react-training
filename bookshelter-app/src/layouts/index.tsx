import styles from './index.module.css';
import Header from '../components/Header';
import CategoriesSection from '../components/CategoriesSection';
import CategoryList from '../components/CategoryList';
import { useState, useEffect } from 'react';
import { Category } from '../types';
import { get } from '../services/api';
import { API } from '../constants/api';
interface LayoutProps {
  children: React.ReactNode;
}

const DefaultLayout = ({ children }: LayoutProps) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [currentCategory, setCurrentCategory] = useState<string | null>(null);
  const [currentTotalBook, setCurrentTotalBook] = useState<number | null>(null);

  useEffect(() => {
    const fetchCategoriesList = async (): Promise<void> => {
      const categories = await get<Category[]>(API.CATEGORIES_ENDPOINT);
      if (categories) setCategories(categories);
    };

    fetchCategoriesList();
  }, []);

  const handleCategoryClick = (
    categoryName: string,
    categoryTotalBook: number
  ) => {
    setCurrentCategory(categoryName);
    setCurrentTotalBook(categoryTotalBook);
  };

  return (
    <>
      <Header />
      <CategoriesSection
        currentCategory={currentCategory}
        currentTotalBook={currentTotalBook}
      />
      <CategoryList categories={categories} onClick={handleCategoryClick} />
      <section className={styles.content}>{children}</section>
    </>
  );
};

export default DefaultLayout;
