import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import WrappedBookCard from '.';
import { Book } from '../../types';

describe('BookCard Component', () => {
  const book: Book = {
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
        comment: 'In dolore ad commodo proident sit commodo ad et in magna id.',
      },
    ],
  };

  test('renders book information correctly', () => {
    render(<WrappedBookCard book={book} />);

    // Check render title correctly
    const titleElement = screen.getByRole('heading', { level: 2 });
    expect(titleElement).toHaveTextContent(book.title);

    // Check render author correctly
    const authorElement = screen.getByText(book.author);
    expect(authorElement).toBeInTheDocument();

    // Check render publishedYear correctly
    const publishedElement = screen.getByText(book.publishedYear.toString());
    expect(publishedElement).toBeInTheDocument();

    // Check render img correctly
    const imageElement = screen.getByAltText('image of the book');
    expect(imageElement).toHaveAttribute('src', book.cover);
  });

  test('renders correctly with error boundary', () => {
    const { container } = render(<WrappedBookCard book={book} />);
    expect(container).toBeInTheDocument();
  });
});
