import styles from './index.module.css';
import BookCategory from '../BookCategory';
import getRandomColor from '../../utils/randomColor';
import Close from '../Icons/Close';
import { Category } from '../../types';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface CategoryListProps {
  categories: Category[];
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

const CategoryList = ({
  categories,
  isMenuOpen,
  setIsMenuOpen,
}: CategoryListProps) => {
  const [colors, setColors] = useState<string[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const generatedColors = categories.map(() => getRandomColor());
    setColors(generatedColors);
  }, [categories]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleCategoryClick = (categorySlug: string) => {
    navigate(`/${categorySlug}`);
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  const handleClickClose = () => {
    setIsMenuOpen(false);
  };
  return (
    <section
      className={styles.categoryList}
      style={{
        display: isMenuOpen ? 'flex' : 'none',
        top: isMobile ? 0 : '126px',
        zIndex: 99,
      }}
    >
      {isMobile && (
        <div className={styles.iconClose} onClick={handleClickClose}>
          <Close />
        </div>
      )}

      <p className={styles.curatedList}>
        A curated list of every book ever written
      </p>

      {categories.map((category, index) => (
        <BookCategory
          key={category.id}
          name={category.name}
          totalBooks={category.totalBooks}
          color={colors[index]}
          onClick={() => handleCategoryClick(category.slug)}
        />
      ))}
    </section>
  );
};

export default CategoryList;
