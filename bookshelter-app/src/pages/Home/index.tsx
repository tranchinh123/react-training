import BookCardList from '../../components/BookCardList';
import Loading from '../../components/Loading';
import useFetchBook from '../../hooks/useFetchBook';
import { useToast } from '../../hooks/useToast';

const HomePage = () => {
<<<<<<< HEAD
  const { books, loading, error } = useFetchBook();
  const { showToast } = useToast();

  if (error) {
    showToast('Failed to fetch data to get book', 'error');
  }
=======
  const { books, loading } = useFetchBook();

>>>>>>> eb894425c8bf3ed1b5cc4f744599c9cc41314fbb

  return loading ? <Loading /> : <BookCardList books={books} />;

};

export default HomePage;
