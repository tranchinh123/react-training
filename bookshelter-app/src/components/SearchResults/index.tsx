import styles from './index.module.css';
import { Book } from '../../types';
import { useNavigate } from 'react-router-dom';

interface SearchResultsProps {
  results: Book[];
  onClose: () => void;
}

const SearchResults = ({ results, onClose }: SearchResultsProps) => {
  const navigate = useNavigate();

  const handleClick = (result: Book) => {
    onClose();
    navigate(`/detail/${result.id}`);
  };

  return (
    <div className={styles.ResultList}>
      {results.map((result, id) => (
        <div
          key={id}
          className={styles.BookItem}
          id={result.id}
          onClick={() => handleClick(result)}
        >
          <img className={styles.Image} src={result.cover} alt="" />
          <p className={styles.Title}>{result.title}</p>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
