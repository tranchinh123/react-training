import styles from './index.module.css';
import Logo from '../Logo';
import Input from '../Input';
const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <Logo />
        <Input />
      </div>
    </>
  );
};

export default Header;
