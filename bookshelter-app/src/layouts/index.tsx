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
import { useNavigate, Outlet, useSearchParams } from 'react-router-dom';

const DefaultLayout = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [currentCategory, setCurrentCategory] = useState<string | null>(null);
  const [currentTotalBook, setCurrentTotalBook] = useState<number | null>(null);
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const name = searchParams.get('query');

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

  useEffect(() => {
    const fetchBooks = async (): Promise<void> => {
      if (name) {
        const books = await get<Book>(API.BOOKS_ENDPOINT, 'title', `${name}`);
        setBooks(books);
      }
    };
    fetchBooks();
  }, [name]);

  const handleCategoryClick = (
    categoryName: string,
    categoryTotalBook: number,
    categorySlug: string
  ) => {
    setCurrentCategory(categoryName);
    setCurrentTotalBook(categoryTotalBook);
    navigate(`/${categorySlug}`);
  };

  return loading ? (
    <Loading />
  ) : (
    <>
      <Header />
      <CategoriesSection
        currentCategory={currentCategory}
        currentTotalBook={currentTotalBook}
        books={books}
      />
      <CategoryList categories={categories} onClick={handleCategoryClick} />
      <section className={styles.content}>
        <Outlet />
      </section>
    </>
  );
};

export default DefaultLayout;
