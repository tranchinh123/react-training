import styles from './index.module.css';
import Header from '../components/Header';
import CategoriesSection from '../components/CategoriesSection';
import CategoryList from '../components/CategoryList';

interface LayoutProps {
  children: React.ReactNode;
}
const DefaultLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <CategoriesSection />
      <CategoryList />
      <section className={styles.content}>{children}</section>
    </>
  );
};

export default DefaultLayout;
