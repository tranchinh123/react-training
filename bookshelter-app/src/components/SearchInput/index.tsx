import styles from './index.module.css';
import Glass from '../Icons/Glass';
import React from 'react';
import isEqual from 'react-fast-compare';

interface SearchInputProps {
  searchTerm: string;
  onOpen: () => void;
  onHandleChange: (value: string) => void;
  onHandleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const areEqual = (prevProps: SearchInputProps, nextProps: SearchInputProps) => {
  return isEqual(prevProps, nextProps);
};

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
  },
  areEqual
);

export default SearchInput;
