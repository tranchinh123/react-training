import styles from './index.module.css';

interface BookCategoryProps {
  name: string;
  totalBooks: number;
  color: string;
  onClick: () => void;
}

const BookCategory = ({
  name,
  totalBooks,
  color,
  onClick,
}: BookCategoryProps) => {
  return (
    <div className={styles.categoryItem} onClick={onClick}>
      <div style={{ backgroundColor: color }} className={styles.initials}>
        {name.slice(0, 2)}
      </div>
      <p className={styles.category}>{name}</p>
      <p className={styles.bookQuantity}>{totalBooks}</p>
    </div>
  );
};

export default BookCategory;
