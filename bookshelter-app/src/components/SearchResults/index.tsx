import styles from './index.module.css';
import { Book } from '../../types';
import { Link } from 'react-router-dom';

interface SearchResultsProps {
  results: Book[];
  onClose: () => void;
}

const SearchResults = ({ results, onClose }: SearchResultsProps) => {
  return (
    <div className={styles.resultList}>
      {results.map((result, id) => (
        <Link
          key={id}
          to={`/detail/${result.id}`}
          className={styles.bookItem}
          onClick={onClose}
        >
          <img
            className={styles.image}
            src={result.cover}
            alt={`Cover of ${result.title}`}
          />
          <p className={styles.title}>{result.title}</p>
        </Link>
      ))}
    </div>
  );
};

export default SearchResults;
