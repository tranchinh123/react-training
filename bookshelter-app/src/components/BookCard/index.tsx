import styles from './index.module.css';
interface BookCardProps {
  id: string;
  title: string;
  author: string;
  published: number;
  cover: string;
  onHandleClick: () => void;
}

const BookCard = ({
  id,
  title,
  author,
  published,
  cover,
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
        <p className={styles.published}>{published}</p>
      </div>
    </div>
  );
};
export default BookCard;
