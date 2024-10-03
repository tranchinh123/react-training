import styles from './index.module.css';
import { Category } from '../../types';

interface BookCategoryProps {
  category: Category;
  color: string;
  onClick: () => void;
}

const BookCategory = ({ category, color, onClick }: BookCategoryProps) => {
  return (
    <div className={styles.CategoryItem} onClick={onClick}>
      <div style={{ backgroundColor: color }} className={styles.Initials}>
        {category.name.slice(0, 2)}
      </div>
      <p className={styles.Category}>{category.name}</p>
      <p className={styles.BookQuantity}>{category.totalBooks}</p>
    </div>
  );
};

export default BookCategory;
