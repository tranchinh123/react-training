import { useNavigate } from 'react-router-dom';
import LeftArrow from '../Icons/LeftArrow';
import styles from './index.module.css';

interface HeaderContentSectionProps {
  title: string;
}

const HeaderContentSection = ({ title }: HeaderContentSectionProps) => {
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
      <p className={styles.nameBook}>{title}</p>
    </div>
  );
};

export default HeaderContentSection;
