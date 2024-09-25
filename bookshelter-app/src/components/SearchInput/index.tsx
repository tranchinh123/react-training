import styles from './index.module.css';
import { useState, useEffect } from 'react';
import Glass from '../Icons/Glass';
import { get } from '../../services/api';
import { API } from '../../constants/api';
import { Book } from '../../types';

interface SearchInputProps {
  setResults: (results: Book[]) => void;
  onOpen: () => void;
}

const SearchInput = ({ setResults, onOpen }: SearchInputProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchBookList = async (): Promise<void> => {
      const book = await get<Book[]>(API.BOOKS_ENDPOINT);
      if (book && searchTerm.trim() !== '') {
        const results = book.filter((book) => {
          return book.title && book.title.toLowerCase().includes(searchTerm);
        });
        setResults(results);
      }
    };

    const timeoutId = setTimeout(() => {
      fetchBookList();
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchTerm, setResults]);

  const handleChange = (value: string) => {
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
          onChange={(e) => {
            onOpen();
            handleChange(e.target.value);
          }}
        />
      </div>
    </>
  );
};

export default SearchInput;
