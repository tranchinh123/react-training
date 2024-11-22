import styles from './index.module.css';
import Glass from '../Icons/Glass';
import React from 'react';
interface SearchInputProps {
  searchTerm: string;
  onOpen: () => void;
  onHandleChange: (value: string) => void;
  onHandleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const SearchInput = React.memo(
  ({ searchTerm, onHandleChange, onHandleKeyDown }: SearchInputProps) => {
    return (
      <div className={styles.input}>
        <Glass />
        <input
          className={styles.searchInput}
          type="text"
          value={searchTerm}
          placeholder="Search books"
          onChange={(e) => {
            onHandleChange(e.target.value);
          }}
          onKeyDown={onHandleKeyDown}
        />
      </div>
    );
  }
);

export default SearchInput;
