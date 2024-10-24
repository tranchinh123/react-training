import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ButtonBack from "../components/ButtonBack";

describe("ButtonBack Component", () => {
  test('renders the button with "Back" text', () => {
    const mockHandleBackClick = jest.fn();

    render(<ButtonBack handleBackClick={mockHandleBackClick} />);

    expect(screen.getByText(/back/i)).toBeInTheDocument();
  });

  test("calls handleBackClick when button is clicked", () => {
    const mockHandleBackClick = jest.fn();

    render(<ButtonBack handleBackClick={mockHandleBackClick} />);

    fireEvent.click(screen.getByText(/back/i));

    expect(mockHandleBackClick).toHaveBeenCalledTimes(1);
  });
});
