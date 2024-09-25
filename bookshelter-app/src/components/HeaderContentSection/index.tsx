import { Link } from 'react-router-dom';
import Arrow2 from '../Icons/Arrow2';
import styles from './index.module.css';
import { Book } from '../../types';

interface HeaderContentSectionProps {
  book: Book | null;
}
const HeaderContentSection = ({ book }: HeaderContentSectionProps) => {
  return (
    <div className={styles.headerContentSection}>
      <Link to="/" className={styles.backLink}>
        <Arrow2 />
        <span className={styles.backText}>Back</span>
      </Link>
      <p className={styles.nameBook}>{book?.title}</p>
    </div>
  );
};

export default HeaderContentSection;
