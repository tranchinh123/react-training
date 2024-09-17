import styles from './index.module.css';
interface CateGoryItemProps {
  category: string;
  quantity: number;
}
const CateGoryItem = ({ category, quantity }: CateGoryItemProps) => {
  return (
    <>
      <div className={styles.categoryItem}>
        <div className={styles.initials}>{category.slice(0, 2)}</div>
        <p className={styles.category}>{category}</p>
        <p className={styles.bookQuantity}>{quantity}</p>
      </div>
    </>
  );
};

export default CateGoryItem;
