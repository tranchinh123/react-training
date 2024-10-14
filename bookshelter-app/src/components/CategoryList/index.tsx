import styles from './index.module.css';
import BookCategory from '../BookCategory';
import getRandomColor from '../../utils/randomColor';
import { Category } from '../../types';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface CategoryListProps {
  categories: Category[];
}

const CategoryList = ({ categories }: CategoryListProps) => {
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
        <Link key={category.id} to={`/${category.slug}`}>
          <BookCategory
            name={category.name}
            totalBooks={category.totalBooks}
            color={colors[index]}
          />
        </Link>
      ))}
    </section>
  );
};

export default CategoryList;
