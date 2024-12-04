import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import DetailPage from './';
import useFetchABook from '../../hooks/useFetchABook';
import { useToast } from '../../hooks/useToast';

// Mock the hooks and components
jest.mock('../../hooks/useFetchABook');
jest.mock('../../hooks/useToast');
jest.mock('../../components/Loading', () => () => <div>Loading...</div>);
jest.mock('../../components/HeaderContentSection', () => () => (
  <div>HeaderContentSection</div>
));
jest.mock('../../components/InfoContentSection', () => () => (
  <div>InfoContentSection</div>
));
jest.mock('../../components/MainContentSection', () => () => (
  <div>MainContentSection</div>
));
jest.mock('../../components/CommentsSection', () => () => (
  <div>CommentsSection</div>
));

describe('DetailPage', () => {
  const mockShowToast = jest.fn();

  beforeEach(() => {
    (useToast as jest.Mock).mockReturnValue({ showToast: mockShowToast });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('matches the snapshot when data is fetched successfully', () => {
    const mockBook = {
      title: 'Test Book',
      author: 'Author Name',
      publishedYear: 2023,
      publisher: 'Publisher Name',
      cover: 'cover-url',
      description: 'Book description',
    };

    (useFetchABook as jest.Mock).mockReturnValue({
      loading: false,
      result: mockBook,
      error: null,
    });

    const { asFragment } = render(<DetailPage />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('matches the snapshot when loading', () => {
    (useFetchABook as jest.Mock).mockReturnValue({
      loading: true,
      result: null,
      error: null,
    });

    const { asFragment } = render(<DetailPage />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders Loading component when data is being fetched', () => {
    (useFetchABook as jest.Mock).mockReturnValue({
      loading: true,
      result: null,
      error: null,
    });

    render(<DetailPage />);

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('shows error toast when there is an error fetching data', () => {
    (useFetchABook as jest.Mock).mockReturnValue({
      loading: false,
      result: null,
      error: 'Fetch error',
    });

    render(<DetailPage />);

    expect(mockShowToast).toHaveBeenCalledWith(
      'Failed to fetch data to get book',
      'error'
    );
  });

  test('renders book details when data is fetched successfully', () => {
    const mockBook = {
      title: 'Test Book',
      author: 'Author Name',
      publishedYear: 2023,
      publisher: 'Publisher Name',
      cover: 'cover-url',
      description: 'Book description',
    };

    (useFetchABook as jest.Mock).mockReturnValue({
      loading: false,
      result: mockBook,
      error: null,
    });

    render(<DetailPage />);

    expect(screen.getByText('HeaderContentSection')).toBeInTheDocument();
    expect(screen.getByText('InfoContentSection')).toBeInTheDocument();
    expect(screen.getByText('MainContentSection')).toBeInTheDocument();
    expect(screen.getByText('CommentsSection')).toBeInTheDocument();
  });
});
