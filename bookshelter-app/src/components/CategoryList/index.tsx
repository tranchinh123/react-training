import { useEffect, useState } from 'react';
import styles from './index.module.css';
import BookCategory from '../BookCategory';
import { get } from '../../services/api';
import { API } from '../../constants/api';
import { Categories } from '../../types';

const getRandomColor = (): string => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const CategoryList = () => {
  const [categories, setCategories] = useState<Categories[]>([]);

  useEffect(() => {
    const loadCategoriesList = async (): Promise<void> => {
      const fetchCategories = await get<Categories[]>(
        'categories',
        API.CATEGORIES_ENDPOINT
      );
      if (fetchCategories) setCategories(fetchCategories);
    };

    loadCategoriesList();
  }, []);

  return (
    <>
      <section className={styles.categoryList}>
        <p className={styles.curatedList}>
          A curated list of every book ever written
        </p>
        {categories.map((category) => (
          <BookCategory
            key={category.id}
            category={category.name}
            quantity={category.totalBooks}
            color={getRandomColor()}
          />
        ))}
      </section>
    </>
  );
};

export default CategoryList;
