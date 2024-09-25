import styles from './index.module.css';
import { Book } from '../../types';
import { useNavigate } from 'react-router-dom';
interface SearchBookItemProps {
  results: Book[];
}

const SearchBookItem = ({ results }: SearchBookItemProps) => {
  const navigate = useNavigate();

  return (
    <div className={styles.resultList}>
      {results.map((result, id) => (
        <div
          key={id}
          className={styles.bookItem}
          id={result.id}
          onClick={() => navigate(`/detail/${result.id}`)}
        >
          <img className={styles.image} src={result.cover} alt="" />
          <p className={styles.title}>{result.title}</p>
        </div>
      ))}
    </div>
  );
};
export default SearchBookItem;
