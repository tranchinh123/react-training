import styles from './index.module.css';
const Input = () => {
  return (
    <>
      <input className={styles.input} type="text" placeholder="Search books" />
    </>
  );
};

export default Input;
