import styles from './index.module.css';
import { Book } from '../../types';

interface MainContentSectionProp {
  book: Book;
}
const MainContentSection = ({ book }: MainContentSectionProp) => {
  return (
    <div className={styles.mainContent}>
      <img
        className={styles.imgBook}
        src={book.cover}
        alt="image of the book "
      />
      <p className={styles.description}>{book.description}</p>
    </div>
  );
};

export default MainContentSection;
