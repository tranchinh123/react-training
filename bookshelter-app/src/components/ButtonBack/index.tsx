import React from 'react';
import styles from './index.module.css';
import LeftArrow from '../Icons/LeftArrow';
interface ButtonBackProps {
  handleBackClick: () => void;
}

const ButtonBack = React.memo(({ handleBackClick }: ButtonBackProps) => {
  return (
    <button className={styles.backLink} onClick={handleBackClick}>
      <LeftArrow />
      <span className={styles.backText}>Back</span>
    </button>
  );
});

export default ButtonBack;
