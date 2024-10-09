import HeaderContentSection from '../../components/HeaderContentSection';
import MainContentSection from '../../components/MainContentSection';
import InfoContentSection from '../../components/InfoContentSection';
import styles from './index.module.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getByID } from '../../services/api';
import { Book } from '../../types';
import { API } from '../../constants/api';
import Loading from '../../components/Loading';

const DetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookDetail = async (): Promise<void> => {
      setLoading(true);
      try {
        if (id) {
          const book = await getByID(API.BOOKS_ENDPOINT, id);
          if (book) {
            setBook(book);
          }
        }
      } catch (error) {
        console.error('Failed to fetch books:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchBookDetail();
  }, [id]);

  return loading ? (
    <Loading />
  ) : (
    book && (
      <div className={styles.contentSection}>
        <HeaderContentSection title={book.title} />
        <InfoContentSection
          author={book.author}
          publishedYear={book.publishedYear}
          publisher={book.publisher}
        />
        <MainContentSection cover={book.cover} description={book.description} />
      </div>
    )
  );
};

export default DetailPage;
