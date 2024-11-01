import styles from './index.module.css';
interface InputProps {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ label, value, onChange }: InputProps) => {
  return (
    <>
      <label className={styles.name} htmlFor="input">
        {label}
      </label>
      <input
        className={styles.input}
        type="text"
        id="input"
        value={value}
        onChange={onChange}
      />
    </>
  );
};
export default Input;
