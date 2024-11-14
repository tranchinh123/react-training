import styles from './index.module.css';
import { forwardRef } from 'react';
interface InputProps {
  label: string;
  ref: React.Ref<HTMLInputElement>;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ label }, ref) => {
  return (
    <>
      <label className={styles.name} htmlFor="input">
        {label}
      </label>
      <input ref={ref} className={styles.input} type="text" id="input" />
    </>
  );
});
export default Input;
