import styles from './index.module.css';
import LogoPage from '../Icons/Logo';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/">
      <a className={styles.logo} href="/">
        <LogoPage />
        <p className={styles.logoText}>BookShelter</p>
      </a>
    </Link>
  );
};

export default Logo;
