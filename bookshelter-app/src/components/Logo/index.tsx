import styles from './index.module.css';
import LogoPage from '../Icons/Logo';
const Logo = () => {
  return (
    <div>
      <a className={styles.logo} href="/">
        <LogoPage />
        <p className={styles.logoText}>BookShelter</p>
      </a>
    </div>
  );
};

export default Logo;
