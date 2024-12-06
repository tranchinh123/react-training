import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import SearchResults from '.';
import { Book } from '../../types';
import BookCardList from '../BookCardList';

describe('SearchResults Component', () => {
  const mockResults: Book[] = [
    {
      id: '63d7755f50f3cca31911ea67',
      title: 'Nostrud commodo sint reprehenderit duis ad sit aute.',
      author: 'Naomi',
      category: 'contemporary',
      publishedYear: 2016,
      publisher: 'Liliana',
      description:
        'Veniam laborum sint magna in sit pariatur irure laboris anim et. Consequat ex duis sunt et labore consequat nisi. Ea amet officia ullamco nostrud officia irure duis nulla exercitation veniam sint ut. Culpa irure excepteur ea qui sit aliqua Lorem nulla ut minim culpa.\r\n',
      cover: 'https://i.ibb.co/ZSRxJHH/book-1.png',
      comments: [
        {
          id: 1,
          author: 'David',
          comment:
            'In dolore ad commodo proident sit commodo ad et in magna id.',
        },
      ],
    },

    {
      id: '63d7755f50f3cca31911ea79',
      title: 'Nostrud commodo sint ad sit .',
      author: 'Henry',
      category: 'contemporary',
      publishedYear: 2016,
      publisher: 'Liliana',
      description:
        'Veniam  sint magna in sit  anim et. Consequat ex nisi. Ea  officia exercitation  sint ut. Culpa  ea qui sit Lorem  ut minim culpa.\r\n',
      cover: 'https://i.ibb.co/ZSRxJHH/book-1.png',
      comments: [
        {
          id: 1,
          author: 'David',
          comment: 'In  ad sit  ad et in magna id.',
        },
      ],
    },
  ];

  const mockOnClose = jest.fn();

  beforeEach(() => {
    render(
      <MemoryRouter>
        <SearchResults results={mockResults} onClose={mockOnClose} />
      </MemoryRouter>
    );
  });

  test('matches snapshots', () => {
    const { container } = render(
      <MemoryRouter>
        <SearchResults results={mockResults} onClose={mockOnClose} />
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });

  test('should renders the correct number of search results', () => {
    const items = screen.getAllByRole('link');
    expect(items).toHaveLength(mockResults.length);
  });

  test('should renders book UI correctly', () => {
    mockResults.forEach((book) => {
      expect(screen.getByText(book.title)).toBeInTheDocument();

      const img = screen.getByAltText(`Cover of ${book.title}`);
      expect(img).toHaveAttribute('src', book.cover);
    });
  });

  test('should calls onClose when a book item is clicked', () => {
    const firstBook = screen.getByText(mockResults[0].title);
    const linkElement = firstBook.closest('a');

    expect(linkElement).not.toBeNull();

    if (linkElement) {
      fireEvent.click(linkElement);
    }

    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  test('should renders links for each book', () => {
    render(
      <MemoryRouter>
        <SearchResults results={mockResults} onClose={mockOnClose} />
      </MemoryRouter>
    );
    const links = screen.getAllByRole('link');

    expect(links[0]).toHaveAttribute(
      'href',
      '/detail/63d7755f50f3cca31911ea67'
    );
    expect(links[1]).toHaveAttribute(
      'href',
      '/detail/63d7755f50f3cca31911ea79'
    );
  });

  test('should navigate to the correct detail page on Search Result click', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<BookCardList books={mockResults} />} />
          <Route path="/detail/:id" element={<div>Book Detail Page</div>} />
        </Routes>
      </MemoryRouter>
    );
    const SearchResultsLink = screen.getByRole('link', { name: / Naomi/i });
    fireEvent.click(SearchResultsLink);
    expect(screen.getByText(/book detail page/i)).toBeInTheDocument();
  });
});
