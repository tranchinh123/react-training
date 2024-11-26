import styles from './index.module.css';
import Logo from '../Logo';
import Menu from '../Icons/Menu';
import SearchInput from '../SearchInput';
import React, {
  useState,
  useEffect,
  useRef,
  lazy,
  Suspense,
  useCallback,
} from 'react';
import { Book } from '../../types';
import { useNavigate } from 'react-router-dom';
import { get } from '../../services/api';
import { API } from '../../constants/api';
import { useToast } from '../../hooks/useToast';
import ErrorBoundary from '../../error/ErrorBoundary';
import ErrorComponent from '../../error/ErrorComponent';
import SkeletonSearchResults from '../Skeleton/SkeletonSearchResults';
import isEqual from 'react-fast-compare';

const SearchResults = lazy(() => import('../SearchResults'));

interface HeaderProps {
  onClick: () => void;
}

const areEqual = (prevProps: HeaderProps, nextProps: HeaderProps) => {
  return isEqual(prevProps.onClick, nextProps.onClick);
};

const Header = React.memo(({ onClick }: HeaderProps) => {
  const [results, setResults] = useState<Book[]>([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const searchRef = useRef<HTMLDivElement>(null);
  const { showToast } = useToast();

  const handleOpen = useCallback(() => {
    setIsSearchOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setIsSearchOpen(false);
  }, []);

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
      if ('error' in books) {
        showToast('Fail to fetch data get book', 'error');
        return;
      }

      setResults(books);
      if (Array.isArray(books) && books.length > 0) handleOpen();
    };

    const timeoutId = setTimeout(() => {
      fetchBookList();
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchTerm, setResults, showToast, handleOpen]);

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
  }, [handleClose]);

  const onHandleChange = useCallback(
    (value: string) => {
      setSearchTerm(value);
      if (value.trim() === '') {
        setResults([]);
        handleClose();
      }
    },
    [handleClose]
  );

  const onHandleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        handleClose();
        navigate(`/search?query=${searchTerm}`);
      }
    },
    [handleClose, navigate, searchTerm]
  );

  return (
    <header className={styles.header}>
      <div className={styles.Menu} onClick={onClick}>
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
          <ErrorBoundary fallback={<ErrorComponent />}>
            <Suspense fallback={<SkeletonSearchResults />}>
              <SearchResults results={results} onClose={handleClose} />
            </Suspense>
          </ErrorBoundary>
        )}
      </div>
    </header>
  );
}, areEqual);

export default Header;
