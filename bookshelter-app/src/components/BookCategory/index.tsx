import styles from './index.module.css';
import { Link } from 'react-router-dom';
interface BookCategoryProps {
  name: string;
  totalBooks: number;
  color: string;
  onClick: () => void;
  categorySlug: string;
}

const BookCategory = ({
  name,
  totalBooks,
  color,
  onClick,
  categorySlug,
}: BookCategoryProps) => {
  return (
    <Link to={`/${categorySlug}`}>
      <div className={styles.categoryItem} onClick={onClick}>
        <div style={{ backgroundColor: color }} className={styles.initials}>
          {name.slice(0, 2)}
        </div>
        <p className={styles.category}>{name}</p>
        <p className={styles.bookQuantity}>{totalBooks}</p>
      </div>
    </Link>
  );
};

export default BookCategory;
