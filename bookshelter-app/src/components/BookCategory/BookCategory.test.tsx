import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import BookCategory from '.';

describe('BookCategory Component', () => {
  const MockOnClick = jest.fn();
  const props = {
    name: 'Adventure',
    totalBooks: 15,
    color: ' blue',
    categorySlug: 'adventure',
    onClick: MockOnClick,
  };

  test('matches snapshots', () => {
    const { container } = render(
      <MemoryRouter>
        <BookCategory {...props} />
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });

  // Check render UI component
  test('render correctly with given props', () => {
    render(
      <MemoryRouter>
        <BookCategory {...props} />
      </MemoryRouter>
    );

    // Check if the category name is rendered
    expect(screen.getByText(/adventure/i)).toBeInTheDocument();

    // Check if the total books is rendered
    expect(screen.getByText(/15/i)).toBeInTheDocument();

    // Check if the color is rendered
    const initialsElement = screen.getByTestId('initials');
    expect(initialsElement).toHaveStyle('background-color: blue');
  });

  // Calls onClick when user click
  test('Calls onClick when the category is clicked ', () => {
    render(
      <MemoryRouter>
        <BookCategory {...props} />
      </MemoryRouter>
    );

    const BookCategoryItem = screen.getByText(/adventure/i).closest('div');
    fireEvent.click(BookCategoryItem as HTMLElement);
    expect(MockOnClick).toHaveBeenCalledTimes(1);
  });

  // Check navigate to the correct slug
  test('navigates to the correct slug on click', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<BookCategory {...props} />} />
          <Route path="/adventure" element={<div>Adventure Page</div>} />
        </Routes>
      </MemoryRouter>
    );

    const linkElement = screen.getByRole('link', { name: /adventure/i });
    fireEvent.click(linkElement);

    expect(screen.getByText(/adventure page/i)).toBeInTheDocument();
  });
});
