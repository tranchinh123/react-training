import styles from './index.module.css';
import BookCategory from '../BookCategory';
import getRandomColor from '../../utils/randomColor';
import { Category } from '../../types';
import { useState, useEffect } from 'react';

interface CategoryListProps {
  categories: Category[];
  onClick: (categoryName: string, currentTotalBook: number) => void;
}

const CategoryList = ({ categories, onClick }: CategoryListProps) => {
  const [colors, setColors] = useState<string[]>([]);

  useEffect(() => {
    // Generate colors only once when the component mounts
    const generatedColors = categories.map(() => getRandomColor());
    setColors(generatedColors);
  }, [categories]); // Dependency array ensures this runs when categories change

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
          onClick={() => onClick(category.name, category.totalBooks)}
        />
      ))}
    </section>
  );
};

export default CategoryList;
