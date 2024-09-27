import styles from './index.module.css';
import BookCategory from '../BookCategory';
import getRandomColor from '../../utils/randomColor';
import { Category } from '../../types';
import { useState, useEffect } from 'react';

interface CategoryListProps {
  categories: Category[];
  onClick: (
    categoryName: string,
    currentTotalBook: number,
    categorySlug: string
  ) => void;
}

const CategoryList = ({ categories, onClick }: CategoryListProps) => {
  const [colors, setColors] = useState<string[]>([]);

  useEffect(() => {
    const generatedColors = categories.map(() => getRandomColor());
    setColors(generatedColors);
  }, [categories]);

  return (
    <section className={styles.categoryList}>
      <p className={styles.curatedList}>
        A curated list of every book ever written
      </p>
      {categories.map((category, index) => (
        <BookCategory
          key={category.id}
          category={category.name}
          quantity={category.totalBooks}
          color={colors[index]}
          onClick={() =>
            onClick(category.name, category.totalBooks, category.slug)
          }
        />
      ))}
    </section>
  );
};

export default CategoryList;
