import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ErrorComponent from './ErrorComponent';

describe('ErrorComponent', () => {
  test('matches snapshots', () => {
    const { container } = render(<ErrorComponent />);
    expect(container).toMatchSnapshot();
  });

  test('renders error message', () => {
    render(<ErrorComponent />);
    const errorMessage = screen.getByText(/something went wrong/i);
    expect(errorMessage).toBeInTheDocument();
  });

  test('has correct styling', () => {
    const { container } = render(<ErrorComponent />);

    expect(container.firstChild).toHaveStyle('padding: 20px');
    expect(container.firstChild).toHaveStyle('text-align: center');
    expect(container.firstChild).toHaveStyle('color: red');
  });
});
