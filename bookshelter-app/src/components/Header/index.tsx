import styles from './index.module.css';
import Logo from '../Logo';
import SearchInput from '../SearchInput';
import SearchBookItem from '../SearchBookItem';
import { useState } from 'react';
import { Book } from '../../types';
const Header = () => {
  const [results, setResults] = useState<Book[]>([]);
  // const [isInputFocused, setInputFocused] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <Logo />
        <div className={styles.searchBarContainer}>
          <SearchInput
            setResults={setResults}
            // onFocusChange={setInputFocused}
          />
          {/* {isInputFocused && <SearchBookItem results={results} />} */}
          <SearchBookItem results={results} />
        </div>
      </header>
    </>
  );
};

export default Header;
