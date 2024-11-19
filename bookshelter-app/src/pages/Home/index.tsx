import BookCardList from '../../components/BookCardList';
import Loading from '../../components/Loading';
import useFetchBook from '../../hooks/useFetchBook';

const HomePage = () => {
  const { books, loading } = useFetchBook();
  return <div>{loading ? <Loading /> : <BookCardList books={books} />}</div>;
};

export default HomePage;
