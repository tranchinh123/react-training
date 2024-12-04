import { render, screen } from '@testing-library/react';
import HomePage from './';
import useFetchBook from '../../hooks/useFetchBook';
import { useToast } from '../../hooks/useToast';
import '@testing-library/jest-dom';

// Mock the hooks and components
jest.mock('../../hooks/useFetchBook');
jest.mock('../../hooks/useToast');
jest.mock('../../components/BookCardList', () => () => <div>BookCardList</div>);

describe('HomePage', () => {
  const mockShowToast = jest.fn();

  beforeEach(() => {
    (useToast as jest.Mock).mockReturnValue({ showToast: mockShowToast });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('matches the snapshot when books are fetched successfully', () => {
    const mockBooks = [
      { id: 1, title: 'Test Book 1' },
      { id: 2, title: 'Test Book 2' },
    ];

    (useFetchBook as jest.Mock).mockReturnValue({
      books: mockBooks,
      error: null,
    });

    const { asFragment } = render(<HomePage />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders BookCardList when books are fetched successfully', () => {
    // Mock successful fetch
    (useFetchBook as jest.Mock).mockReturnValue({
      books: [{ id: 1, title: 'Test Book' }],
      error: null,
    });

    render(<HomePage />);

    expect(screen.getByText('BookCardList')).toBeInTheDocument();
    expect(mockShowToast).not.toHaveBeenCalled();
  });

  test('shows error toast when there is an error fetching books', () => {
    // Mock error fetch
    (useFetchBook as jest.Mock).mockReturnValue({
      books: [],
      error: 'Fetch error',
    });

    render(<HomePage />);

    expect(mockShowToast).toHaveBeenCalledWith(
      'Failed to fetch data to get book',
      'error'
    );
  });
});
