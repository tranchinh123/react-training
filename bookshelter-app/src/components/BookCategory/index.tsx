import styles from './index.module.css';
interface CateGoryItemProps {
  category: string;
  quantity: number;
  color: string;
}
const BookCategory = ({ category, quantity, color }: CateGoryItemProps) => {
  return (
    <>
      <div className={styles.categoryItem}>
        <div style={{ backgroundColor: color }} className={styles.initials}>
          {category.slice(0, 2)}
        </div>
        <p className={styles.category}>{category}</p>
        <p className={styles.bookQuantity}>{quantity}</p>
      </div>
    </>
  );
};

export default BookCategory;
