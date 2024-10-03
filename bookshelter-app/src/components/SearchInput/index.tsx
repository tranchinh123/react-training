import styles from './index.module.css';
import Glass from '../Icons/Glass';

interface SearchInputProps {
  searchTerm: string;
  onOpen: () => void;
  onHandleChange: (value: string) => void;
  onHandleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const SearchInput = ({
  onOpen,
  searchTerm,
  onHandleChange,
  onHandleKeyDown,
}: SearchInputProps) => {
  return (
    <div className={styles.Input}>
      <Glass size={20} />
      <input
        className={styles.SearchInput}
        type="text"
        value={searchTerm}
        placeholder="Search books"
        onChange={(e) => {
          onOpen();
          onHandleChange(e.target.value);
        }}
        onKeyDown={onHandleKeyDown}
      />
    </div>
  );
};

export default SearchInput;
