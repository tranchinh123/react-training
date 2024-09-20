import styles from './index.module.css';

import Glass from '../Icons/Glass';
const SearchInput = () => {
  return (
    <>
      <div className={styles.input}>
        <Glass />
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Search books"
        />
      </div>
    </>
  );
};

export default SearchInput;
