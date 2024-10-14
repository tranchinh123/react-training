import styles from './index.module.css';
import BookCategory from '../BookCategory';
import getRandomColor from '../../utils/randomColor';
import { Category } from '../../types';

import { useNavigate } from 'react-router-dom';

interface CategoryListProps {
  categories: Category[];
}

const CategoryList = ({ categories }: CategoryListProps) => {
  const navigate = useNavigate();

  const colors = categories.map(() => getRandomColor());

  const handleCategoryClick = (categorySlug: string) => {
    navigate(`/${categorySlug}`);
  };

  return (
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
          onClick={() => handleCategoryClick(category.slug)}
        />
      ))}
    </section>
  );
};

export default CategoryList;
