import styles from './index.module.css';
import { Book } from '../../types';
interface SearchBookItem {
  results: Book[];
}

const SearchBookItem = ({ results }: SearchBookItem) => {
  return (
    <div className={styles.resultList}>
      {results.map((result, id) => (
        <div key={id} className={styles.bookItem} onClick={alert}>
          <img className={styles.image} src={result.cover} alt="" />
          <p>{result.title}</p>
        </div>
      ))}
    </div>
  );
};
export default SearchBookItem;
