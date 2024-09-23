import DefaultLayout from '../../layouts';
import styles from './index.module.css';
import Arrow2 from '../../components/Icons/Arrow2';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getByID } from '../../services/api';
import { Book } from '../../types';
import { API } from '../../constants/api';
const DetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [book, setBook] = useState<Book | null>(null);

  useEffect(() => {
    const fetchBookList = async (): Promise<void> => {
      const book = await getByID(API.BOOKS_ENDPOINT, id!);
      if (book) {
        setBook(book);
      }
    };
    fetchBookList();
  }, [id]);
  return (
    <DefaultLayout>
      <div className={styles.detailContentPage}>
        <div className={styles.headerContent}>
          <Link to="/" className={styles.backLink}>
            <Arrow2 />
            <span className={styles.backText}>Back</span>
          </Link>
          <p className={styles.nameBook}>Angels and Demons</p>
        </div>

        <div className={styles.info}>
          <div className={styles.textInfo}>
            <p className={styles.textInfoItem}>Author:</p>
            <p className={styles.textInfoItem}>Published:</p>
            <p className={styles.textInfoItem}>Publisher:</p>
          </div>
          <div className={styles.infoBook}>
            <p className={styles.infoBookItem}>{book?.author}</p>
            <p className={styles.infoBookItem}>{book?.publishedYear}</p>
            <p className={styles.infoBookItem}>{book?.publisher}</p>
          </div>
        </div>

        <div className={styles.mainContent}>
          <img
            className={styles.imgBook}
            src={book?.cover}
            alt="image of the book "
          />
          <p className={styles.description}>{book?.description}</p>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default DetailPage;
