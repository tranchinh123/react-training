import DefaultLayout from '../../layouts';
import BookCard from '../../components/BookCard';

const HomePage = () => {
  return (
    <>
      <DefaultLayout>
        <BookCard
          name="Angels and demons"
          author="Stuart Matt"
          published={2021}
          url="https://i.imgur.com/Mx7dA2Y.jpg"
        ></BookCard>
      </DefaultLayout>
    </>
  );
};

export default HomePage;
