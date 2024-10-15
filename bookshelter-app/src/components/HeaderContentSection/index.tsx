import { useNavigate } from 'react-router-dom';
import ButtonBack from '../ButtonBack';
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
      <ButtonBack handleBackClick={handleBackClick} />
      <p className={styles.nameBook}>{title}</p>
    </div>
  );
};

export default HeaderContentSection;
