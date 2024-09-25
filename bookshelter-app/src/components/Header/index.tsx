import styles from './index.module.css';
import Logo from '../Logo';
import SearchInput from '../SearchInput';
import SearchBookItem from '../SearchBookItem';
import { useState } from 'react';
import { Book } from '../../types';
const Header = () => {
  const [results, setResults] = useState<Book[]>([]);
  const [isSearchOpen, setIsSearchOpen] = useState(true);

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
        <div className={styles.searchBarContainer}>
          <SearchInput
            setResults={setResults}
            onOpen={handleOpen}
            onclose={handleClose}
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
