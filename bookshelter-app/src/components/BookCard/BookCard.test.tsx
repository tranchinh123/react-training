import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import BookCard from '.';
import { book } from '../../__mocks__/fileData';

describe('BookCard Component', () => {
  test('matches snapshots', () => {
    const { container } = render(<BookCard book={book} />);
    expect(container).toMatchSnapshot();
  });

  test('should renders book information correctly', () => {
    render(<BookCard book={book} />);

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
});
