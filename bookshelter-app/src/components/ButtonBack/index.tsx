import React from 'react';
import styles from './index.module.css';
import LeftArrow from '../Icons/LeftArrow';
import isEqual from 'react-fast-compare';
interface ButtonBackProps {
  handleBackClick: () => void;
}

const areEqual = (prevProps: ButtonBackProps, nextProps: ButtonBackProps) => {
  return isEqual(prevProps.handleBackClick, nextProps.handleBackClick);
};

const ButtonBack = React.memo(({ handleBackClick }: ButtonBackProps) => {
  return (
    <button className={styles.backLink} onClick={handleBackClick}>
      <LeftArrow />
      <span className={styles.backText}>Back</span>
    </button>
  );
}, areEqual);

export default ButtonBack;
