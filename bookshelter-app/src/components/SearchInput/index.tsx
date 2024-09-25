import styles from './index.module.css';
import { useState, useEffect } from 'react';
import Glass from '../Icons/Glass';
import { get } from '../../services/api';
import { API } from '../../constants/api';
import { Book } from '../../types';
import { useNavigate } from 'react-router-dom';

interface SearchInputProps {
  setResults: (results: Book[]) => void;
  onOpen: () => void;
  onclose: () => void;
}

const SearchInput = ({ setResults, onOpen, onclose }: SearchInputProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBookList = async (): Promise<void> => {
      const books = await get<Book[]>(API.BOOKS_ENDPOINT);
      if (books && searchTerm.trim() !== '') {
        const results = books.filter((books) => {
          return books.title && books.title.toLowerCase().includes(searchTerm);
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

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onclose();
      navigate(`/name/${searchTerm}`);
    }
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
          onKeyDown={handleKeyDown}
        />
      </div>
    </>
  );
};

export default SearchInput;
