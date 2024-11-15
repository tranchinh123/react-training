import BookCardList from '../../components/BookCardList';
import Loading from '../../components/Loading';
import useFetchBook from '../../hooks/useFetchBook';

const HomePage = () => {
  const { books, loading } = useFetchBook();
  console.log('homepage');

  return loading ? <Loading /> : <BookCardList books={books} />;
};

export default HomePage;
