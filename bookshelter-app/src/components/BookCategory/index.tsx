import styles from './index.module.css';
import { Link } from 'react-router-dom';
import { withErrorBoundary } from 'react-error-boundary';
import ErrorComponent from '../../error/ErrorBoundary';
interface BookCategoryProps {
  name: string;
  totalBooks: number;
  color: string;
  categorySlug: string;
  onClick: () => void;
}

const BookCategory = ({
  name,
  totalBooks,
  color,
  categorySlug,
  onClick,
}: BookCategoryProps) => {
  return (
    <Link to={`/${categorySlug}`}>
      <div className={styles.categoryItem} onClick={onClick}>
        <div
          data-testid="initials"
          style={{ backgroundColor: color }}
          className={styles.initials}
        >
          {name.slice(0, 2)}
        </div>
        <p className={styles.category}>{name}</p>
        <p className={styles.bookQuantity}>{totalBooks}</p>
      </div>
    </Link>
  );
};

const WrappedBookCategory = withErrorBoundary(BookCategory, {
  FallbackComponent: ErrorComponent,
});

export default WrappedBookCategory;
