import styles from './index.module.css';
import { forwardRef } from 'react';
import React from 'react';
interface InputProps {
  label: string;
  ref: React.Ref<HTMLInputElement>;
}

const Input = React.memo(
  forwardRef<HTMLInputElement, InputProps>(({ label }, ref) => {
    return (
      <>
        <label className={styles.name} htmlFor="input">
          {label}
        </label>
        <input ref={ref} className={styles.input} type="text" id="input" />
      </>
    );
  })
);
export default Input;
