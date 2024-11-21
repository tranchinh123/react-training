import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HeaderContentSection from '.';
import '@testing-library/jest-dom';

// Mock ButtonBack component
jest.mock('../ButtonBack', () => (handleBackClick: () => void) => (
  <button onClick={handleBackClick}>Back</button>
));

describe('HeaderContentSection component', () => {
  const props = {
    title: 'My Book Title',
  };

  test('matches snapshot', () => {
    const { container } = render(
      <MemoryRouter>
        <HeaderContentSection {...props} />
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });

  test('renders the title and back button', () => {
    render(
      <MemoryRouter>
        <HeaderContentSection {...props} />
      </MemoryRouter>
    );

    expect(screen.getByText(props.title)).toBeInTheDocument();

    expect(screen.getByRole('button', { name: /back/i })).toBeInTheDocument();
  });

  test('calls handleBackClick when back button is clicked', () => {
    const handleBackClick = jest.fn();
    render(
      <MemoryRouter>
        <HeaderContentSection {...props} />
      </MemoryRouter>
    );

    const backButton = screen.getByRole('button', { name: /back/i });
    fireEvent.click(backButton);

    expect(handleBackClick).toHaveBeenCalledTimes(1);
  });
});
