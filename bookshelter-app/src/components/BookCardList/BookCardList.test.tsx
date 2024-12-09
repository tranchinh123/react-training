import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import BookCardList from '.';
import { mockBooks } from '../../__mocks__/fileData';

describe('BookCardList Component', () => {
  test('matches snapshots', () => {
    const { container } = render(
      <MemoryRouter>
        <BookCardList books={mockBooks} />
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });

  test('should renders a list of books', () => {
    render(
      <MemoryRouter>
        <BookCardList books={mockBooks} />
      </MemoryRouter>
    );
    expect(screen.getByText('Naomi')).toBeInTheDocument();
    expect(screen.getByText('Henry')).toBeInTheDocument();
  });

  test('should renders nothing when books array is empty', () => {
    const { container } = render(
      <MemoryRouter>
        <BookCardList books={[]} />
      </MemoryRouter>
    );
    expect(container.children).toHaveLength(0);
  });

  test('should renders links for each book', () => {
    render(
      <MemoryRouter>
        <BookCardList books={mockBooks} />
      </MemoryRouter>
    );
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(mockBooks.length);
    expect(links[0]).toHaveAttribute(
      'href',
      '/detail/63d7755f50f3cca31911ea67'
    );
    expect(links[1]).toHaveAttribute(
      'href',
      '/detail/63d7755f50f3cca31911ea99'
    );
  });

  test('should navigates to the correct detail page on BookCard click', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<BookCardList books={mockBooks} />} />
          <Route path="/detail/:id" element={<div>Book Detail Page</div>} />
        </Routes>
      </MemoryRouter>
    );
    const bookCardLink = screen.getByRole('link', { name: / Naomi/i });
    fireEvent.click(bookCardLink);
    expect(screen.getByText(/book detail page/i)).toBeInTheDocument();
  });
});
