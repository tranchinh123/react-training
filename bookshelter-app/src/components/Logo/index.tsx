import styles from './index.module.css';
import LogoPage from '../Icons/Logo';
import { Link } from 'react-router-dom';
import React from 'react';

const Logo = React.memo(() => {
  return (
    <Link to="/">
      <div className={styles.logo}>
        <LogoPage />
        <p className={styles.logoText}>BookShelter</p>
      </div>
    </Link>
  );
});

export default Logo;
