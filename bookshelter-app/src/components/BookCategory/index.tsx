import styles from './index.module.css';
import { Category } from '../../types';
interface BookCategoryProps {
  Category: Category;
  color: string;
  onClick: () => void;
}
const BookCategory = ({ Category, color, onClick }: BookCategoryProps) => {
  return (
    <div className={styles.categoryItem} onClick={onClick}>
      <div style={{ backgroundColor: color }} className={styles.initials}>
        {Category.name.slice(0, 2)}
      </div>
      <p className={styles.category}>{Category.name}</p>
      <p className={styles.bookQuantity}>{Category.totalBooks}</p>
    </div>
  );
};

export default BookCategory;
