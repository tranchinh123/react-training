import styles from './index.module.css';
import Logo from '../Logo';
import Input from '../SearchInput';
import SearchBookItem from '../SearchBookItem';
const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <Logo />
        <div className={styles.searchBarContainer}>
          <Input />
          <SearchBookItem />
        </div>
      </header>
    </>
  );
};

export default Header;
