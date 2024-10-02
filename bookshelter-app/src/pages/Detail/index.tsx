import DefaultLayout from '../../layouts';
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
    const fetchBookList = async (): Promise<void> => {
      if (id) {
        const book = await getByID(API.BOOKS_ENDPOINT, id);
        if (book) {
          setBook(book);
        }
      }
    };
    fetchBookList();
  }, [id]);

  return (
    <DefaultLayout isFilteredSlug={false} isFilteredName={false} books={[]}>
      {book && (
        <div className={styles.ContentSection}>
          <HeaderContentSection book={book} />
          <InfoContentSection book={book} />
          <MainContentSection book={book} />
        </div>
      )}
    </DefaultLayout>
  );
};

export default DetailPage;
