import styles from './index.module.css';
const Input = () => {
  return (
    <>
      <label htmlFor="input">Name</label>
      <input className={styles.input} type="text" id="input" />
    </>
  );
};
export default Input;
