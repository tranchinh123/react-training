import styles from './index.module.css';
import React from 'react';
const Button = React.memo(() => {
  return <button className={styles.button}>Post Comment</button>;
});
export default Button;
