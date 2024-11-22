import styles from './index.module.css';
import BookCategory from '../BookCategory';
import getRandomColor from '../../utils/randomColor';
import Close from '../Icons/Close';
import { Category } from '../../types';
import React, { useCallback, useMemo } from 'react';
import ErrorBoundary from '../../error/ErrorBoundary';
import ErrorComponent from '../../error/ErrorComponent';

interface CategoryListProps {
  categories: Category[];
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

const CategoryList = React.memo(
  ({ categories, isMenuOpen, setIsMenuOpen }: CategoryListProps) => {
    const colors = useMemo(() => {
      return categories.map(() => getRandomColor());
    }, [categories]);

    const handleClickClose = () => {
      setIsMenuOpen(false);
    };

    const handleClickCategory = useCallback(() => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    }, [isMenuOpen, setIsMenuOpen]);

    return (
      <>
        <section className={styles.categoryList}>
          <p className={styles.curatedList}>
            A curated list of every book ever written
          </p>

          {categories.map((category, index) => (
            <ErrorBoundary fallback={<ErrorComponent />} key={index}>
              <BookCategory
                key={category.id}
                name={category.name}
                totalBooks={category.totalBooks}
                color={colors[index]}
                categorySlug={category.slug}
                onClick={handleClickCategory}
              ></BookCategory>
            </ErrorBoundary>
          ))}
        </section>

        {isMenuOpen && (
          <section className={styles.categoryListMobile}>
            <div className={styles.iconClose} onClick={handleClickClose}>
              <Close />
            </div>
            <p className={styles.curatedList}>
              A curated list of every book ever written
            </p>

            {categories.map((category, index) => (
              <ErrorBoundary fallback={<ErrorComponent />} key={index}>
                <BookCategory
                  key={category.id}
                  name={category.name}
                  totalBooks={category.totalBooks}
                  color={colors[index]}
                  categorySlug={category.slug}
                  onClick={handleClickCategory}
                ></BookCategory>
              </ErrorBoundary>
            ))}
          </section>
        )}
      </>
    );
  }
);

export default CategoryList;
