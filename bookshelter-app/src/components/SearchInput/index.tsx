import styles from './index.module.css';
import Glass from '../Icons/Glass';

interface SearchInputProps {
  searchTerm: string;
  onOpen: () => void;
  onHandleChange: (value: string) => void;
  onHandleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const SearchInput = ({
  searchTerm,
  onHandleChange,
  onHandleKeyDown,
}: SearchInputProps) => {
  return (
    <div className={styles.input}>
      <Glass size={20} />
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
};

export default SearchInput;
