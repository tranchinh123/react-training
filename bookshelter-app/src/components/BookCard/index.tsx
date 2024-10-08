import styles from './index.module.css';

interface BookCardProps {
  id: string;
  cover: string;
  title: string;
  author: string;
  publishedYear: number;
  onHandleClick: () => void;
}

const BookCard = ({
  id,
  cover,
  title,
  author,
  publishedYear,
  onHandleClick,
}: BookCardProps) => {
  return (
    <div className={styles.card} onClick={onHandleClick} id={id}>
      <div className={styles.imageCard}>
        <img className={styles.imageBook} src={cover} alt="image of the book" />
      </div>
      <div className={styles.bookInform}>
        <h2 className={styles.nameBook}>{title}</h2>
        <p className={styles.author}>{author}</p>
        <p className={styles.published}>{publishedYear}</p>
      </div>
    </div>
  );
};
export default BookCard;
