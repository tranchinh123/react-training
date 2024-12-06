import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ButtonBack from '.';

jest.mock('../Icons/LeftArrow', () => () => <svg data-testid="left-arrow" />);

describe('ButtonBack component', () => {
  test('should renders button with Back text and LeftArrow icon', () => {
    render(<ButtonBack handleBackClick={jest.fn()} />);

    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();

    const backText = screen.getByText(/back/i);
    expect(backText).toBeInTheDocument();

    const leftArrowIcon = screen.getByTestId('left-arrow');
    expect(leftArrowIcon).toBeInTheDocument();
  });

  test('should calls handleBackClick when button is clicked', () => {
    const handleBackClick = jest.fn();
    render(<ButtonBack handleBackClick={handleBackClick} />);

    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement);

    expect(handleBackClick).toHaveBeenCalledTimes(1);
  });

  test('matches snapshots', () => {
    const { container } = render(<ButtonBack handleBackClick={jest.fn()} />);
    expect(container).toMatchSnapshot();
  });
});
