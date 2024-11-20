import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '.';

describe('Button component', () => {
  test('renders button with correct text', () => {
    render(<Button />);
    const buttonElement = screen.getByRole('button', { name: /post comment/i });
    expect(buttonElement).toBeInTheDocument();
  });

  test('has correct class name', () => {
    render(<Button />);
    const buttonElement = screen.getByRole('button', { name: /post comment/i });
    expect(buttonElement).toHaveClass('button');
  });
});
