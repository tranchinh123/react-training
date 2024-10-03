import { Link } from 'react-router-dom';
import LeftArrow from '../Icons/LeftArrow';
import styles from './index.module.css';
import { Book } from '../../types';

interface HeaderContentSectionProps {
  book: Book;
}

const HeaderContentSection = ({ book }: HeaderContentSectionProps) => {
  return (
    <div className={styles.headerContentSection}>
      <Link to="/" className={styles.backLink}>
        <LeftArrow />
        <span className={styles.backText}>Back</span>
      </Link>
      <p className={styles.nameBook}>{book.title}</p>
    </div>
  );
};

export default HeaderContentSection;
