import styles from './index.module.css';
import Glass from '../Icons/Glass';

interface SearchInputProps {
  searchTerm: string;
  onOpen: () => void;
  handleChange: (value: string) => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const SearchInput = ({
  onOpen,
  searchTerm,
  handleKeyDown,
  handleChange,
}: SearchInputProps) => {
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
