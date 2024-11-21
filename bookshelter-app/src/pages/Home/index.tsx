import BookCardList from '../../components/BookCardList';
import Loading from '../../components/Loading';
import useFetchBook from '../../hooks/useFetchBook';
import { useToast } from '../../hooks/useToast';

const HomePage = () => {
  const { books, loading, error } = useFetchBook();
  const { showToast } = useToast();

  if (error) {
    showToast('Failed to fetch data to get book', 'error');
  }

  return loading ? <Loading /> : <BookCardList books={books} />;
};

export default HomePage;
