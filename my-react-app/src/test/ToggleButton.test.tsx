import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ToggleButton from "../components/ToggleButton";

describe("ToggleButton Component", () => {
  const mockOnToggle = jest.fn();

  beforeEach(() => {
    render(
      <ToggleButton
        initialText="Off"
        toggledText="On"
        onToggle={mockOnToggle}
      />
    );
  });

  test("renders with initial text", () => {
    expect(screen.getByText(/off/i)).toBeInTheDocument();
  });

  test("calls onToggle when button is clicked", () => {
    const button = screen.getByRole("button", { name: /off/i });

    // Nhấn nút lần đầu
    fireEvent.click(button);
    // Kiểm tra xem hàm onToggle đã được gọi chưa
    expect(mockOnToggle).toHaveBeenCalledTimes(1);

    // Nhấn nút lần thứ hai
    fireEvent.click(button);
    // Kiểm tra xem hàm onToggle đã được gọi hai lần
    expect(mockOnToggle).toHaveBeenCalledTimes(2);
  });

  test("changes text when clicked", () => {
    const button = screen.getByRole("button", { name: /off/i });

    // Nhấn nút
    fireEvent.click(button);

    // Kiểm tra rằng văn bản đã thay đổi
    expect(screen.getByText(/on/i)).toBeInTheDocument();
  });

  test("toggles text on subsequent clicks", () => {
    const button = screen.getByRole("button", { name: /off/i });

    fireEvent.click(button);
    expect(screen.getByText(/on/i)).toBeInTheDocument();

    fireEvent.click(screen.getByText(/on/i));
    expect(screen.getByText(/off/i)).toBeInTheDocument();
  });
});
