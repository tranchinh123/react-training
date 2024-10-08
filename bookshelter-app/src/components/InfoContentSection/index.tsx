import styles from './index.module.css';

interface InfoContentSectionProp {
  author: string;
  publishedYear: number;
  publisher: string;
}

const InfoContentSection = ({
  author,
  publishedYear,
  publisher,
}: InfoContentSectionProp) => {
  return (
    <div className={styles.infoContentSection}>
      <div className={styles.textInfo}>
        <p className={styles.textInfoItem}>Author:</p>
        <p className={styles.textInfoItem}>Published:</p>
        <p className={styles.textInfoItem}>Publisher:</p>
      </div>
      <div className={styles.infoBook}>
        <p className={styles.infoBookItem}>{author}</p>
        <p className={styles.infoBookItem}>{publishedYear}</p>
        <p className={styles.infoBookItem}>{publisher}</p>
      </div>
    </div>
  );
};

export default InfoContentSection;
