import HeaderContentSection from '../../components/HeaderContentSection';
import MainContentSection from '../../components/MainContentSection';
import InfoContentSection from '../../components/InfoContentSection';
import styles from './index.module.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getByID } from '../../services/api';
import { Book } from '../../types';
import { API } from '../../constants/api';

const DetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [book, setBook] = useState<Book | null>(null);

  useEffect(() => {
    const fetchBookDetail = async (): Promise<void> => {
      if (id) {
        const book = await getByID(API.BOOKS_ENDPOINT, id);
        if (book) {
          setBook(book);
        }
      }
    };
    fetchBookDetail();
  }, [id]);

  return (
    <>
      {book && (
        <div className={styles.ContentSection}>
          <HeaderContentSection book={book} />
          <InfoContentSection book={book} />
          <MainContentSection book={book} />
        </div>
      )}
    </>
  );
};

export default DetailPage;
