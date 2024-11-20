import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import CategoriesSection from './';
import useFetchCategories from '../../hooks/useFetchCategories';

jest.mock('../../hooks/useFetchCategories');
jest.mock('../Icons/RightArrow');

describe('CategoriesSection component', () => {
  beforeEach(() => {
    (useFetchCategories as jest.Mock).mockClear();
  });

  test('renders categories when slug and categories are available', () => {
    (useFetchCategories as jest.Mock).mockReturnValue({
      categories: [{ name: 'Adventure', totalBooks: 10 }],
    });

    render(
      <MemoryRouter initialEntries={['/categories/adventure']}>
        <CategoriesSection />
      </MemoryRouter>
    );

    expect(screen.getByText(/categories/i)).toBeInTheDocument();
    expect(screen.getByText(/adventure/i)).toBeInTheDocument();
    expect(screen.getByText(/showing 10 result\(s\)/i)).toBeInTheDocument();
    expect(screen.getByTestId('right-arrow')).toBeInTheDocument(); // Kiểm tra icon RightArrow
  });

  test('shows search results when name is provided', () => {
    render(
      <MemoryRouter initialEntries={['/categories?query=some-query']}>
        <CategoriesSection />
      </MemoryRouter>
    );

    expect(
      screen.getByText(/showing results for some-query/i)
    ).toBeInTheDocument();
  });

  test('shows "Showing 0 Result(s)" when no parameters are provided', () => {
    render(
      <MemoryRouter initialEntries={['/categories']}>
        <CategoriesSection />
      </MemoryRouter>
    );

    expect(screen.getByText(/showing 0 result\(s\)/i)).toBeInTheDocument();
  });

  test('does not render categories when slug is not available', () => {
    (useFetchCategories as jest.Mock).mockReturnValue({ categories: [] });

    render(
      <MemoryRouter initialEntries={['/categories']}>
        <CategoriesSection />
      </MemoryRouter>
    );

    expect(screen.queryByText(/categories/i)).not.toBeInTheDocument();
  });
});
