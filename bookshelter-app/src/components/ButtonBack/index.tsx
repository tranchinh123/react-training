import styles from './index.module.css';
import LeftArrow from '../Icons/LeftArrow';

interface ButtonBackProps {
  handleBackClick: () => void;
}

const ButtonBack = ({ handleBackClick }: ButtonBackProps) => {
  return (
    <button className={styles.backLink} onClick={handleBackClick}>
      <LeftArrow />
      <span className={styles.backText}>Back</span>
    </button>
  );
};

export default ButtonBack;
