import styles from './index.module.css';
import BookCategory from '../BookCategory';
import getRandomColor from '../../utils/randomColor';
import Close from '../Icons/Close';
import { Category } from '../../types';
import { useState, useEffect } from 'react';

interface CategoryListProps {
  categories: Category[];
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

const CategoryList = ({
  categories,
  isMenuOpen,
  setIsMenuOpen,
}: CategoryListProps) => {
  const [colors, setColors] = useState<string[]>([]);

  useEffect(() => {
    const generatedColors = categories.map(() => getRandomColor());
    setColors(generatedColors);
  }, [categories]);

  const handleClickClose = () => {
    setIsMenuOpen(false);
  };

  const handleClickCategory = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <section className={styles.categoryList}>
        <p className={styles.curatedList}>
          A curated list of every book ever written
        </p>

        {categories.map((category, index) => (
          <BookCategory
            key={category.id}
            name={category.name}
            totalBooks={category.totalBooks}
            color={colors[index]}
            categorySlug={category.slug}
            onClick={handleClickCategory}
          ></BookCategory>
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
            <BookCategory
              key={category.id}
              name={category.name}
              totalBooks={category.totalBooks}
              color={colors[index]}
              categorySlug={category.slug}
              onClick={handleClickCategory}
            ></BookCategory>
          ))}
        </section>
      )}
    </>
  );
};

export default CategoryList;
