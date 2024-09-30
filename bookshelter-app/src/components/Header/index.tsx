import styles from './index.module.css';
import Logo from '../Logo';
import SearchInput from '../SearchInput';
import SearchBookItem from '../SearchBookItem';
import { useState, useEffect, useRef } from 'react';
import { Book } from '../../types';
import { useNavigate } from 'react-router-dom';
import { get } from '../../services/api';
import { API } from '../../constants/api';

const Header = () => {
  const [results, setResults] = useState<Book[]>([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchBookList = async (): Promise<void> => {
      const books = await get<Book[]>(
        API.BOOKS_ENDPOINT,
        'title',
        `${searchTerm}`
      );
      setResults(books || []);
    };

    const timeoutId = setTimeout(() => {
      fetchBookList();
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchTerm, setResults]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        handleClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleChange = (value: string) => {
    setSearchTerm(value);
    if (value.trim() === '') {
      setResults([]);
      handleClose();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleClose();
      navigate(`/name/${searchTerm}`);
    }
  };

  const handleOpen = () => {
    setIsSearchOpen(true);
  };

  const handleClose = () => {
    setIsSearchOpen(false);
  };

  return (
    <>
      <header className={styles.header}>
        <Logo />
        <div className={styles.searchBarContainer} ref={searchRef}>
          <SearchInput
            searchTerm={searchTerm}
            onOpen={handleOpen}
            handleKeyDown={handleKeyDown}
            handleChange={handleChange}
          />

          {isSearchOpen && (
            <SearchBookItem results={results} onClose={handleClose} />
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
