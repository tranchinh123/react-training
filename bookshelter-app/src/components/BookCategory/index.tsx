import styles from './index.module.css';
import { Category } from '../../types';

interface BookCategoryProps {
  category: Category;
  color: string;
  onClick: () => void;
}

const BookCategory = ({ category, color, onClick }: BookCategoryProps) => {
  return (
    <div className={styles.categoryItem} onClick={onClick}>
      <div style={{ backgroundColor: color }} className={styles.initials}>
        {category.name.slice(0, 2)}
      </div>
      <p className={styles.category}>{category.name}</p>
      <p className={styles.bookQuantity}>{category.totalBooks}</p>
    </div>
  );
};

export default BookCategory;
