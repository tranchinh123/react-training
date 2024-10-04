import { useNavigate } from 'react-router-dom';
import LeftArrow from '../Icons/LeftArrow';
import styles from './index.module.css';
import { Book } from '../../types';

interface HeaderContentSectionProps {
  book: Book;
}

const HeaderContentSection = ({ book }: HeaderContentSectionProps) => {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(-1);
  };
  return (
    <div className={styles.headerContentSection}>
      <button className={styles.backLink} onClick={handleBackClick}>
        <LeftArrow />
        <span className={styles.backText}>Back</span>
      </button>
      <p className={styles.nameBook}>{book.title}</p>
    </div>
  );
};

export default HeaderContentSection;
