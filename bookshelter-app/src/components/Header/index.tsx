import styles from './index.module.css';
import Logo from '../Logo';
import Menu from '../Icons/Menu';
import SearchInput from '../SearchInput';
import SearchResults from '../SearchResults';
import { useState, useEffect, useRef } from 'react';
import { Book } from '../../types';
import { useNavigate } from 'react-router-dom';
import { get } from '../../services/api';
import { API } from '../../constants/api';

interface HeaderProps {
  onToggleMenu: () => void;
}

const Header = ({ onToggleMenu }: HeaderProps) => {
  const [results, setResults] = useState<Book[]>([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchBookList = async (): Promise<void> => {
      if (searchTerm.trim() === '') {
        setResults([]);
        return;
      }
      const books = await get<Book>(
        API.BOOKS_ENDPOINT,
        'title',
        `${searchTerm}`
      );
      if (books.length > 0) handleOpen();
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

  const onHandleChange = (value: string) => {
    if (value.trim() === '') {
      setResults([]);
      handleClose();
    }
    setSearchTerm(value);
  };

  const onHandleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleClose();
      navigate(`/search?query=${searchTerm}`);
    }
  };

  const handleOpen = () => {
    setIsSearchOpen(true);
  };

  const handleClose = () => {
    setIsSearchOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.Menu} onClick={onToggleMenu}>
        <Menu />
      </div>
      <Logo />
      <div ref={searchRef}>
        <SearchInput
          searchTerm={searchTerm}
          onOpen={handleOpen}
          onHandleChange={onHandleChange}
          onHandleKeyDown={onHandleKeyDown}
        />

        {isSearchOpen && (
          <SearchResults results={results} onClose={handleClose} />
        )}
      </div>
    </header>
  );
};

export default Header;
