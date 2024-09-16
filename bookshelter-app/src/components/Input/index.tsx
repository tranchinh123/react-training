import styles from './index.module.css';
import glass from '../../assets/images/magnifyingGlass.svg';
const Input = () => {
  return (
    <>
      <div className={styles.input}>
        <img src={glass} alt="" />
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Search books"
        />
      </div>
    </>
  );
};

export default Input;
