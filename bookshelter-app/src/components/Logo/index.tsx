import styles from './index.module.css';
import LogoPage from '../Icons/Logo';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/">
      <a className={styles.Logo} href="/">
        <LogoPage />
        <p className={styles.LogoText}>BookShelter</p>
      </a>
    </Link>
  );
};

export default Logo;
