import styles from './index.module.css';
import LogoPage from '../Icons/Logo';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/">
      <div className={styles.logo}>
        <LogoPage />
        <p className={styles.logoText}>BookShelter</p>
      </div>
    </Link>
  );
};

export default Logo;
