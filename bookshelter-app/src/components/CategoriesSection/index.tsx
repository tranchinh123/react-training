import { useParams, useSearchParams, useLocation } from 'react-router-dom';
import styles from './index.module.css';
import RightArrow from '../Icons/RightArrow';
import useFetchCategories from '../../hooks/useFetchCategories';
import { useToast } from '../../hooks/useToast';

const CategoriesSection = () => {
  const { slug, id } = useParams<{ slug: string; id: string }>();
  const [searchParams] = useSearchParams();
  const name = searchParams.get('query');
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const { showToast } = useToast();

  const { categories, error } = useFetchCategories(slug);
  if (error) {
    showToast('Failed to fetch data ', 'error');
  }
  return (
    <section className={styles.categoriesSection}>
      <p className={styles.categories}>Categories</p>

      {slug && categories.length > 0 && (
        <div className={styles.wrapped}>
          <div className={styles.category}>{categories[0].name}</div>
          <RightArrow />
          <p className={styles.showQuantity}>
            Showing {categories[0].totalBooks} Result(s)
          </p>
        </div>
      )}
      {name && (
        <div className={styles.wrapped}>
          <p className={styles.showQuantity}>Showing results for {name}</p>
        </div>
      )}
      {!name && !id && !slug && !isHomePage && (
        <div className={styles.wrapped}>
          <p className={styles.showQuantity}>Showing 0 Result(s)</p>
        </div>
      )}
    </section>
  );
};

export default CategoriesSection;
