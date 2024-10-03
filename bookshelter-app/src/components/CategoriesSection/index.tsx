import { useParams, useSearchParams, useLocation } from 'react-router-dom';
import styles from './index.module.css';
import RightArrow from '../Icons/RightArrow';
import { Book } from '../../types';

interface CategoriesSectionProps {
  currentCategory: string | null;
  currentTotalBook: number | null;
  books: Book[];
}

const CategoriesSection = ({
  currentCategory,
  currentTotalBook,
  books,
}: CategoriesSectionProps) => {
  const { slug, id } = useParams<{ slug: string; id: string }>();
  const [searchParams] = useSearchParams();
  const name = searchParams.get('query');
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <section className={styles.categoriesSection}>
      <p className={styles.categories}>Categories</p>

      {slug && (
        <div className={styles.wrapped}>
          <div className={styles.category}>{currentCategory}</div>
          <RightArrow />
          <p className={styles.showQuantity}>
            Showing {currentTotalBook} Result(s)
          </p>
        </div>
      )}
      {name && (
        <div className={styles.wrapped}>
          <p className={styles.showQuantity}>
            Showing {books.length} Result(s)
          </p>
        </div>
      )}
      {!name && books.length === 0 && !id && !slug && !isHomePage && (
        <div className={styles.wrapped}>
          <p className={styles.showQuantity}>Showing 0 Result(s)</p>
        </div>
      )}
    </section>
  );
};

export default CategoriesSection;
