import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import BookCardList from '.';
import { Book } from '../../types';

describe('BookCardList Component', () => {
  const mockBooks: Book[] = [
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
      id: '63d7755f50f3cca31911ea99',
      title: 'Nostrud commodo sint reprehenderit duis ad sit aute.',
      author: 'Henry',
      category: 'adventure',
      publishedYear: 2018,
      publisher: 'Lisa',
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
  ];

  test('matches snapshots', () => {
    const { container } = render(
      <MemoryRouter>
        <BookCardList books={mockBooks} />
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });

  test('renders a list of books', () => {
    render(
      <MemoryRouter>
        <BookCardList books={mockBooks} />
      </MemoryRouter>
    );
    expect(screen.getByText('Naomi')).toBeInTheDocument();
    expect(screen.getByText('Henry')).toBeInTheDocument();
  });

  test('renders nothing when books array is empty', () => {
    const { container } = render(
      <MemoryRouter>
        <BookCardList books={[]} />
      </MemoryRouter>
    );
    expect(container.children).toHaveLength(0);
  });

  test('renders links for each book', () => {
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

  test('navigates to the correct detail page on BookCard click', () => {
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
