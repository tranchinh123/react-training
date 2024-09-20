import styles from './index.module.css';
import BookCategory from '../BookCategory';
import getRandomColor from '../../utils/randomColor';
interface Category {
  id: number;
  name: string;
  totalBooks: number;
}

interface CategoryListProps {
  categories: Category[];
  onClick: (categoryName: string) => void;
}

const CategoryList = ({ categories, onClick }: CategoryListProps) => {
  return (
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
          onClick={() => onClick(category.name)}
        />
      ))}
    </section>
  );
};

export default CategoryList;
