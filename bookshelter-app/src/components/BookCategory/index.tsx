import styles from './index.module.css';

interface BookCategoryProps {
  category: string;
  quantity: number;
  onHandleClick: () => void;
}

const BookCategory = ({
  category,
  quantity,
  onHandleClick,
}: BookCategoryProps) => {
  return (
    <div className={styles.categoryItem} onClick={onHandleClick}>
      <div className={styles.initials}>{category.slice(0, 2)}</div>
      <p className={styles.category}>{category}</p>
      <p className={styles.bookQuantity}>{quantity}</p>
    </div>
  );
};

export default BookCategory;
