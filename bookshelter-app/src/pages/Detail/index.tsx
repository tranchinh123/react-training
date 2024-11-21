import HeaderContentSection from '../../components/HeaderContentSection';
import MainContentSection from '../../components/MainContentSection';
import InfoContentSection from '../../components/InfoContentSection';
import CommentSection from '../../components/CommentsSection';
import styles from './index.module.css';
import Loading from '../../components/Loading';
import useFetchABook from '../../hooks/useFetchABook';
import { useToast } from '../../hooks/useToast';

const DetailPage = () => {
  const { result, loading, error } = useFetchABook();
  const { showToast } = useToast();

  if (error) {
    showToast('Failed to fetch data to get book', 'error');
  }
  return loading ? (
    <Loading />
  ) : (
    result && (
      <div className={styles.contentSection}>
        <HeaderContentSection title={result.title} />
        <InfoContentSection
          author={result.author}
          publishedYear={result.publishedYear}
          publisher={result.publisher}
        />
        <MainContentSection
          cover={result.cover}
          description={result.description}
        />
        <CommentSection book={result} />
      </div>
    )
  );
};

export default DetailPage;
