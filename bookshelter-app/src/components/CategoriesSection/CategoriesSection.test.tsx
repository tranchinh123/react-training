import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import CategoriesSection from './';
import useFetchCategories from '../../hooks/useFetchCategories';
import { useToast } from '../../hooks/useToast';

// Mock các hook
jest.mock('../../hooks/useFetchCategories');
jest.mock('../../hooks/useToast');

describe('CategoriesSection', () => {
  const mockShowToast = jest.fn();

  beforeEach(() => {
    (useToast as jest.Mock).mockReturnValue({ showToast: mockShowToast });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('matches snapshots', () => {
    (useFetchCategories as jest.Mock).mockReturnValue({
      categories: [
        { id: 1, name: 'Adventure', totalBooks: 23, slug: 'adventure' },
      ],
      error: null,
    });

    const { container } = render(
      <MemoryRouter initialEntries={['/adventure']}>
        <Routes>
          <Route path="/adventure" element={<CategoriesSection />} />
        </Routes>
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });

  test('should shows error toast when fetch fails', () => {
    (useFetchCategories as jest.Mock).mockReturnValue({
      categories: [],
      error: 'something went wrong',
    });

    render(
      <MemoryRouter initialEntries={['/some-path']}>
        <CategoriesSection />
      </MemoryRouter>
    );

    expect(mockShowToast).toHaveBeenCalledWith(
      'Failed to fetch data ',
      'error'
    );
  });

  test('should renders showing results for search query', () => {
    (useFetchCategories as jest.Mock).mockReturnValue({
      categories: [],
      error: null,
    });

    const { getByText } = render(
      <MemoryRouter initialEntries={['/search?query=test']}>
        <CategoriesSection />
      </MemoryRouter>
    );

    expect(getByText('Showing results for test')).toBeInTheDocument();
  });

  test('should renders showing 0 results when no conditions are met', () => {
    (useFetchCategories as jest.Mock).mockReturnValue({
      categories: [],
      error: null,
    });

    const { getByText } = render(
      <MemoryRouter initialEntries={['/some-path']}>
        <CategoriesSection />
      </MemoryRouter>
    );

    expect(getByText('Showing 0 Result(s)')).toBeInTheDocument();
  });
});
