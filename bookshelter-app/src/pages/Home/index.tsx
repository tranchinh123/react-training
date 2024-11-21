import BookCardList from '../../components/BookCardList';
import Loading from '../../components/Loading';
import useFetchBook from '../../hooks/useFetchBook';
import { useToast } from '../../hooks/useToast';
import ErrorBoundary from '../../error/ErrorBoundary';
import ErrorComponent from '../../error/ErrorComponent';

const HomePage = () => {
  const { books, loading, error } = useFetchBook();
  const { showToast } = useToast();

  if (error) {
    showToast('Failed to fetch data to get book', 'error');
  }

  return loading ? (
    <Loading />
  ) : (
    <ErrorBoundary fallback={<ErrorComponent />}>
      <BookCardList books={books} />
    </ErrorBoundary>
  );
};

export default HomePage;
