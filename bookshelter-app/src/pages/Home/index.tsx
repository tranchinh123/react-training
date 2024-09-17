import Header from '../../components/Header';
import CategoriesSection from '../../components/CategoriesSection';
// import CategoryList from '../../components/CategoryList';
import BookCard from '../../components/BookCard';
const HomePage = () => {
  return (
    <>
      <Header />
      <CategoriesSection />
      {/* <CategoryList /> */}
      <BookCard
        name="Angels and demons"
        author="Stuart Matt"
        published={2021}
        url="https://i.imgur.com/Mx7dA2Y.jpg"
      />
    </>
  );
};

export default HomePage;
