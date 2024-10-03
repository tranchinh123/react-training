import { Link } from 'react-router-dom';
import LeftArrow from '../Icons/LeftArrow';
import styles from './index.module.css';
import { Book } from '../../types';

interface HeaderContentSectionProps {
  book: Book;
}

const HeaderContentSection = ({ book }: HeaderContentSectionProps) => {
  return (
    <div className={styles.HeaderContentSection}>
      <Link to="/" className={styles.BackLink}>
        <LeftArrow />
        <span className={styles.BackText}>Back</span>
      </Link>
      <p className={styles.NameBook}>{book.title}</p>
    </div>
  );
};

export default HeaderContentSection;
