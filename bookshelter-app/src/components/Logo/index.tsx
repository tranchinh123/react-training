import logo from '../../assets/images/Logo.svg';
import styles from './index.module.css';
const Logo = () => {
  return (
    <div>
      <a className={styles.logo} href="/">
        <img src={logo} alt="Logo page" />
        <p className={styles.logoText}>BookShelter</p>
      </a>
    </div>
  );
};

export default Logo;
