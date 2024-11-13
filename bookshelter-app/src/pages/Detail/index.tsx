import HeaderContentSection from '../../components/HeaderContentSection';
import MainContentSection from '../../components/MainContentSection';
import InfoContentSection from '../../components/InfoContentSection';
import CommentSection from '../../components/CommentsSection';
import styles from './index.module.css';
import Loading from '../../components/Loading';
import useFetchABook from '../../hooks/useFetchABook';

const DetailPage = () => {
  const { book, loading } = useFetchABook();

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
        <CommentSection book={book} />
      </div>
    )
  );
};

export default DetailPage;
