import styles from './index.module.css';
interface BookCardProps {
  name: string;
  author: string;
  published: number;
  url: string;
  onHandleClick: () => void;
}

const BookCard = ({
  name,
  author,
  published,
  url,
  onHandleClick,
}: BookCardProps) => {
  return (
    <div className={styles.card} onClick={onHandleClick}>
      <div className={styles.imageCard}>
        <img className={styles.imageBook} src={url} alt="" />
      </div>
      <div className={styles.bookInform}>
        <h2 className={styles.nameBook}>{name}</h2>
        <p className={styles.author}>{author}</p>
        <p className={styles.published}>{published}</p>
      </div>
    </div>
  );
};
export default BookCard;
