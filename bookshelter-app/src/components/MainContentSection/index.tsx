import styles from './index.module.css';
import { Book } from '../../types';

interface MainContentSectionProp {
  book: Book;
}

const MainContentSection = ({ book }: MainContentSectionProp) => {
  return (
    <div className={styles.MainContent}>
      <img
        className={styles.ImgBook}
        src={book.cover}
        alt="image of the book "
      />
      <p className={styles.Description}>{book.description}</p>
    </div>
  );
};

export default MainContentSection;
