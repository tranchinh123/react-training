import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '.';

describe('Button component', () => {
  test('should renders button correctly ', () => {
    render(<Button />);
    const buttonElement = screen.getByRole('button', { name: /post comment/i });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass('button');
  });

  test('matches snapshot', () => {
    const { container } = render(<Button />);
    expect(container).toMatchSnapshot();
  });
});
