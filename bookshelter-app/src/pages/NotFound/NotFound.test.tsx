import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NotFound from '.';

describe('Testing Not Found Page', () => {
  beforeEach(() => {
    render(<NotFound />);
  });
  test('matches snapshots', () => {
    const { container } = render(<NotFound />);
    expect(container).toMatchSnapshot();
  });

  test('render the NotFound page message', () => {
    const text = screen.getByText('No results found');
    expect(text).toBeInTheDocument();
  });

  test('Render Glass component', () => {
    const { container } = render(<NotFound />);
    const glassIcon = container.querySelector('svg');
    expect(glassIcon).toBeInTheDocument();
  });

  test('Check classname ', () => {
    const { container } = render(<NotFound />);
    expect(container.firstChild).toHaveClass('notFoundPage');

    const messageElement = container.querySelector('p');
    expect(messageElement).toHaveClass('text');
  });
});
