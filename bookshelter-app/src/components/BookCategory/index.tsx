import styles from './index.module.css';
interface CateGoryItemProps {
  category: string;
  quantity: number;
  color: string;
  onClick?: () => void;
}
const BookCategory = ({
  category,
  quantity,
  color,
  onClick,
}: CateGoryItemProps) => {
  return (
    <div className={styles.categoryItem} onClick={onClick}>
      <div style={{ backgroundColor: color }} className={styles.initials}>
        {category.slice(0, 2)}
      </div>
      <p className={styles.category}>{category}</p>
      <p className={styles.bookQuantity}>{quantity}</p>
    </div>
  );
};

export default BookCategory;
