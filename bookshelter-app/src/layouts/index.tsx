import styles from './index.module.css';
import Header from '../components/Header';
import CategoriesSection from '../components/CategoriesSection';
import CategoryList from '../components/CategoryList';
import { useState, useEffect } from 'react';
import { Category, Book } from '../types';
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
    categoryTotalBook: number,
    categorySlug: string
  ) => {
    setCurrentCategory(categoryName);
    setCurrentTotalBook(categoryTotalBook);
    const fetchBookList = async (): Promise<void> => {
      const listBooks = await get<Book[]>(API.BOOKS_ENDPOINT);
      if (listBooks) {
        {
          const booksWithSameSlug = listBooks.filter(
            (books) => books.category === categorySlug
          );
          console.log(booksWithSameSlug);
        }
      }
    };
    fetchBookList();
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
