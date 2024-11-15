import { useNavigate } from 'react-router-dom';
import ButtonBack from '../ButtonBack';
import styles from './index.module.css';
import { useCallback } from 'react';
import React from 'react';
interface HeaderContentSectionProps {
  title: string;
}

const HeaderContentSection = React.memo(
  ({ title }: HeaderContentSectionProps) => {
    const navigate = useNavigate();

    const handleBackClick = useCallback(() => {
      navigate(-1);
    }, [navigate]);

    return (
      <div className={styles.headerContentSection}>
        <ButtonBack handleBackClick={handleBackClick} />
        <p className={styles.nameBook}>{title}</p>
      </div>
    );
  }
);

export default HeaderContentSection;
