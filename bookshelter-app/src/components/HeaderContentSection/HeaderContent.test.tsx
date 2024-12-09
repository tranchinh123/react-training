import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import HeaderContentSection from './index';

describe('HeaderContentSection component', () => {
  const props = {
    title: 'My Book Title',
  };

  test('matches snapshots', () => {
    const { container } = render(
      <MemoryRouter>
        <HeaderContentSection {...props} />
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });

  test('should renders the title correctly', () => {
    render(
      <MemoryRouter>
        <HeaderContentSection {...props} />
      </MemoryRouter>
    );

    expect(screen.getByText(props.title)).toBeInTheDocument();
  });

  test('should renders the back button', () => {
    render(
      <MemoryRouter>
        <HeaderContentSection {...props} />
      </MemoryRouter>
    );

    expect(screen.getByRole('button', { name: /back/i })).toBeInTheDocument();
  });
});
