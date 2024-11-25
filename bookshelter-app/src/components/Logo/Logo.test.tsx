import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import Logo from '.';

jest.mock('../Icons/Logo', () => () => <svg data-testid="logo-icon" />);

describe('Logo component', () => {
  test('renders Logo with text and icon', () => {
    render(
      <MemoryRouter>
        <Logo />
      </MemoryRouter>
    );

    const logoIcon = screen.getByTestId('logo-icon');
    expect(logoIcon).toBeInTheDocument();

    const logoText = screen.getByText(/bookshelter/i);
    expect(logoText).toBeInTheDocument();
  });

  test('contains a link to the home page', () => {
    render(
      <MemoryRouter>
        <Logo />
      </MemoryRouter>
    );

    const linkElement = screen.getByRole('link', { name: /bookshelter/i });
    expect(linkElement).toHaveAttribute('href', '/');
  });

  test('Matches Snapshots', () => {
    const { container } = render(
      <MemoryRouter>
        <Logo />
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
  });
});
