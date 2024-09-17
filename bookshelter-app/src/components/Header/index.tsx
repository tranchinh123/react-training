import styles from './index.module.css';
import Logo from '../Logo';
import Input from '../SearchInput';
const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <Logo />
        <Input />
      </header>
    </>
  );
};

export default Header;
