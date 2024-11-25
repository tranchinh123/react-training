import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import HeaderContentSection from './index';

// Mock ButtonBack component
jest.mock(
  '../ButtonBack',
  () =>
    ({ handleBackClick }: { handleBackClick: () => void }) => (
      <button onClick={handleBackClick}>Back</button>
    )
);

describe('HeaderContentSection component', () => {
  const props = {
    title: 'My Book Title',
  };

  test('renders the title correctly', () => {
    render(
      <MemoryRouter>
        <HeaderContentSection {...props} />
      </MemoryRouter>
    );

    expect(screen.getByText(props.title)).toBeInTheDocument();
  });

  test('renders the back button', () => {
    render(
      <MemoryRouter>
        <HeaderContentSection {...props} />
      </MemoryRouter>
    );

    expect(screen.getByRole('button', { name: /back/i })).toBeInTheDocument();
  });

  // test('calls navigate with -1 when back button is clicked', () => {
  //   const navigate = jest.fn();

  //   jest.mock('react-router-dom', () => ({
  //     ...jest.requireActual('react-router-dom'),
  //     useNavigate: () => navigate,
  //   }));

  //   render(
  //     <MemoryRouter>
  //       <HeaderContentSection {...props} />
  //     </MemoryRouter>
  //   );

  //   const backButton = screen.getByRole('button', { name: /back/i });
  //   fireEvent.click(backButton);

  //   expect(navigate).toHaveBeenCalledWith(-1);
  // });
});
