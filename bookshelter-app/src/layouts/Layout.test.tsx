import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import DefaultLayout from './';
import useFetchCategories from '../hooks/useFetchCategories';
import { useToast } from '../hooks/useToast';

// Mock the hooks and components
jest.mock('../hooks/useFetchCategories');
jest.mock('../hooks/useToast');
jest.mock('../components/Loading', () => () => <div>Loading...</div>);
jest.mock('../components/CategoriesSection', () => () => (
  <div>CategoriesSection</div>
));

jest.mock('../components/Header', () => {
  return ({ onClick }: { onClick: () => void }) => (
    <div onClick={onClick}>Header</div>
  );
});
jest.mock('../components/CategoryList', () => () => <div>CategoryList</div>);

describe('DefaultLayout', () => {
  const mockShowToast = jest.fn();

  beforeEach(() => {
    (useToast as jest.Mock).mockReturnValue({
      showToast: mockShowToast,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('matches snapshot when loading', () => {
    (useFetchCategories as jest.Mock).mockReturnValue({
      loading: true,
      categories: null,
      error: null,
    });

    const { asFragment } = render(<DefaultLayout />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('matches snapshot when there is an error fetching categories', () => {
    (useFetchCategories as jest.Mock).mockReturnValue({
      loading: false,
      categories: null,
      error: 'Fetch error',
    });

    const { asFragment } = render(<DefaultLayout />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('matches snapshot when data is fetched successfully', () => {
    const mockCategories = ['Category 1', 'Category 2'];

    (useFetchCategories as jest.Mock).mockReturnValue({
      loading: false,
      categories: mockCategories,
      error: null,
    });

    const { asFragment } = render(<DefaultLayout />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders Loading component when data is being fetched', () => {
    (useFetchCategories as jest.Mock).mockReturnValue({
      loading: true,
      categories: null,
      error: null,
    });

    render(<DefaultLayout />);

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('renders components when data is fetched successfully', () => {
    const mockCategories = ['Category 1', 'Category 2'];

    (useFetchCategories as jest.Mock).mockReturnValue({
      loading: false,
      categories: mockCategories,
      error: null,
    });

    render(<DefaultLayout />);

    expect(screen.getByText('Header')).toBeInTheDocument();
    expect(screen.getByText('CategoriesSection')).toBeInTheDocument();
    expect(screen.getByText('CategoryList')).toBeInTheDocument();
  });

  test('toggles the menu open and closed', () => {
    (useFetchCategories as jest.Mock).mockReturnValue({
      loading: false,
      categories: [],
      error: null,
    });

    render(<DefaultLayout />);

    const header = screen.getByText('Header');
    fireEvent.click(header);
    expect(screen.getByText('CategoryList')).toBeInTheDocument();

    fireEvent.click(header);
  });
});
