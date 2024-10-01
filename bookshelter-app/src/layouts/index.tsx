import styles from './index.module.css';
import Header from '../components/Header';
import CategoriesSection from '../components/CategoriesSection';
import CategoryList from '../components/CategoryList';
import Loading from '../components/Loading';
import { Book } from '../types';
import { useState, useEffect } from 'react';
import { Category } from '../types';
import { get } from '../services/api';
import { API } from '../constants/api';
import { useNavigate } from 'react-router-dom';

interface LayoutProps {
  children?: React.ReactNode;
  isFilteredSlug: boolean;
  isFilteredName: boolean;
  books: Book[];
}

const DefaultLayout = ({
  children,
  isFilteredSlug,
  isFilteredName,
  books,
}: LayoutProps) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [currentCategory, setCurrentCategory] = useState<string | null>(null);
  const [currentTotalBook, setCurrentTotalBook] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

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

  const handleCategoryClick = (
    categoryName: string,
    categoryTotalBook: number,
    categorySlug: string
  ) => {
    setCurrentCategory(categoryName);
    setCurrentTotalBook(categoryTotalBook);
    navigate(`/${categorySlug}`);
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <CategoriesSection
            currentCategory={currentCategory}
            currentTotalBook={currentTotalBook}
            isFilteredSlug={isFilteredSlug}
            isFilteredName={isFilteredName}
            books={books}
          />
          <CategoryList categories={categories} onClick={handleCategoryClick} />
          <section className={styles.content}>{children}</section>
        </>
      )}
    </>
  );
};

export default DefaultLayout;
