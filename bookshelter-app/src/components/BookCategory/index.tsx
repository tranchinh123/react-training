import styles from './index.module.css';

interface BookCategoryProps {
  name: string;
  totalBooks: number;
  color: string;
}

const BookCategory = ({ name, totalBooks, color }: BookCategoryProps) => {
  return (
    <div className={styles.categoryItem}>
      <div style={{ backgroundColor: color }} className={styles.initials}>
        {name.slice(0, 2)}
      </div>
      <p className={styles.category}>{name}</p>
      <p className={styles.bookQuantity}>{totalBooks}</p>
    </div>
  );
};

export default BookCategory;
