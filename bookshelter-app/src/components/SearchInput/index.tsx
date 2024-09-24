import styles from './index.module.css';
import { useState } from 'react';
import Glass from '../Icons/Glass';
const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
  };
  return (
    <>
      <div className={styles.input}>
        <Glass size={20} />
        <input
          className={styles.searchInput}
          type="text"
          value={searchTerm}
          placeholder="Search books"
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default SearchInput;
