import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import CategoryList from './';
import { Category } from '../../types';
import { MemoryRouter } from 'react-router-dom';

// Mock data
const mockCategories: Category[] = [
  { id: 1, name: 'Adventure', totalBooks: 100, slug: 'adventure' },
  { id: 2, name: 'Romance', totalBooks: 80, slug: 'romance' },
];

describe('CategoryList', () => {
  let setIsMenuOpen: jest.Mock;

  beforeEach(() => {
    setIsMenuOpen = jest.fn();
  });

  test('renders category list', () => {
    render(
      <MemoryRouter>
        <CategoryList
          categories={mockCategories}
          isMenuOpen={false}
          setIsMenuOpen={setIsMenuOpen}
        />
      </MemoryRouter>
    );

    expect(
      screen.getByText(/A curated list of every book ever written/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/Adventure/i)).toBeInTheDocument();
    expect(screen.getByText(/Romance/i)).toBeInTheDocument();
  });

  test('handles close menu click', () => {
    render(
      <MemoryRouter>
        <CategoryList
          categories={mockCategories}
          isMenuOpen={true}
          setIsMenuOpen={setIsMenuOpen}
        />
      </MemoryRouter>
    );

    const closeButton = screen.getByRole('button', { name: /close/i });
    fireEvent.click(closeButton);

    expect(setIsMenuOpen).toHaveBeenCalledWith(false);
  });

  test('handles category click', () => {
    render(
      <MemoryRouter>
        <CategoryList
          categories={mockCategories}
          isMenuOpen={true}
          setIsMenuOpen={setIsMenuOpen}
        />
      </MemoryRouter>
    );

    const categoryItems = screen.getAllByText(/Adventure/i);
    fireEvent.click(categoryItems[0]);

    expect(setIsMenuOpen).toHaveBeenCalledWith(false);
  });
});
