import styles from './index.module.css';

interface BookCategoryProps {
  category: string;
  quantity: number;
}

const BookCategory = ({ category, quantity }: BookCategoryProps) => {
  return (
    <div className={styles.categoryItem}>
      <div className={styles.initials}>{category.slice(0, 2)}</div>
      <p className={styles.category}>{category}</p>
      <p className={styles.bookQuantity}>{quantity}</p>
    </div>
  );
};

export default BookCategory;
